// Load the AWS SDK for Node.js


require('dotenv').config();
const fs = require('fs');

const AWS = require('aws-sdk');




const BUCKET_NAME = process.env.BUCKET_NAME;


// Set the AWS region 
AWS.config.update({region: 'us-west-1'});

const SAVE_IMAGE_PATH = "../images/";

class imageFileHandler{
    static async saveToStorage(file){
        console.debug("saving file to storage:",file);
        
        // Create S3 service object
        const s3 = new AWS.S3({apiVersion: '2006-03-01'});

        // call S3 to retrieve upload file to specified bucket
        const uploadParams = {Bucket: BUCKET_NAME, Key: '', Body: ''};

        // Configure the file stream and obtain the upload parameters
        console.log("FILE:", file)
        const fileStream = fs.createReadStream(file.path);
            fileStream.on('error', function(err) {
            console.log('File Error', err);
        });

        uploadParams.Body = fileStream;
        uploadParams.Key = `${file.filename}.jpg`;

        // call S3 to retrieve upload file to specified bucket
        s3.upload (uploadParams, function (err, data) {
            if (err) {
                console.log("Error", err);
                return err;
            } if (data) {
                console.log("Upload Success", data.Location);
                return data.Location;
            }
         });
         
         //TODO: handle return values from s3 upload
    }

    static extractExif(){
        //TODO: call EXIF and return metadata object
    }

    static async saveImageMetadataToDb(){
        //TODO: combine exif and form data, save to JSON
        //TODO: update to point to PSQL
    }

    static async updateImageMetadataInDb(){
        //TODO: update title and any other optional metadata fields in PSQL
    }
}

module.exports = imageFileHandler;