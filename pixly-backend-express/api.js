const fs = require("fs");
var exifr = require("exifr");
const db = require("../db");

// Load the AWS SDK for Node.js
require("dotenv").config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuid } = require("uuid");

const REGION = "us-west-1"; //e.g. "us-east-1"
// Create S3 service object
const s3 = new S3Client({ region: REGION });

const S3_BUCKET_NAME = process.env.BUCKET_NAME;

class imageFileHandler {
  static async saveToStorage(fileUpload) {
    const file = fs.createReadStream(fileUpload.path);
    const key = uuid() + ".jpg";
    const putObjectCommand = new PutObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: key,
      Body: file,
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

  static async extractExif(fileUpload) {
    const parseExif = await exifr.parse(fileUpload.path);
    const imageMeta = {
      make: parseExif.Make,
      model: parseExif.Model,
      focalLength: parseExif.FocalLength,
      iso: parseExif.ISO,
      dateTime: parseExif.DateTimeOriginal,
      width: parseExif.ExifImageWidth,
      height: parseExif.ExifImageHeight,
    };

    console.log("IMAGE META: ", imageMeta);
    return imageMeta;
  }

  static async saveImageMetadataToDb({
    filename,
    s3ImagePath,
    make,
    model,
    focalLength,
    iso,
    dateTime,
    width,
    height,
  }) {
    //TODO: combine exif and form data, save to JSON
    //TODO: update to point to PSQL
    //TODO: set up db
    const result = await db.query(
      `INSERT INTO images
            (filename,
            s3_image_path,
            make,
            model,
            focal_length,
            iso,
            data_time,
            width,
            height)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING filename, s3_image_path AS "s3ImagePath", make, model, focal_length AS "focalLength", iso, date_time AS "dateTime", width, height`,
      [
        filename,
        s3ImagePath,
        make,
        model,
        focalLength,
        iso,
        dateTime,
        width,
        height
      ]
    );
      return result;
  }

  static async updateImageMetadataInDb() {
    //TODO: update title and any other optional metadata fields in PSQL
  }
}

module.exports = imageFileHandler;
