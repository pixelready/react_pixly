// Load the AWS SDK for Node.js

require("dotenv").config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuid } = require("uuid");

const REGION = "us-west-1"; //e.g. "us-east-1"
// Create S3 service object
const s3 = new S3Client({ region: REGION });

const S3_BUCKET_NAME = process.env.BUCKET_NAME;

class imageFileHandler {
  static async saveToStorage(file) {
    const key = uuid();
    const putObjectCommand = new PutObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: "image/jpeg",
      Tagging: "public=yes",
    });
    try {
      const data = await s3.send(putObjectCommand);
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
    return `https://${S3_BUCKET_NAME}.s3-us-west-1.amazonaws.com/${key}`;
  }

  static extractExif() {
    //TODO: call EXIF and return metadata object
  }

  static async saveImageMetadataToDb() {
    //TODO: combine exif and form data, save to JSON
    //TODO: update to point to PSQL
  }

  static async updateImageMetadataInDb() {
    //TODO: update title and any other optional metadata fields in PSQL
  }
}

module.exports = imageFileHandler;
