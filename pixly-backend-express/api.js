// Load the AWS SDK for Node.js
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import EXIF from "exif-js";


// Set the AWS region 
AWS.config.update({region: 'REGION'});

const SAVE_IMAGE_PATH = "../images/";

class imageFileHandler{
    static async saveToStorage(file){
        
        // Create S3 service object
        const s3 = new AWS.S3({apiVersion: '2006-03-01'});

        // call S3 to retrieve upload file to specified bucket
        const uploadParams = {Bucket: BUCKET_NAME, Key: '', Body: ''};

        // Configure the file stream and obtain the upload parameters
        
        const fileStream = fs.createReadStream(file);
            fileStream.on('error', function(err) {
            console.log('File Error', err);
        });

        uploadParams.Body = fileStream;
        uploadParams.Key = path.basename(file);

        // call S3 to retrieve upload file to specified bucket
        s3.upload (uploadParams, function (err, data) {
            if (err) {
                console.log("Error", err);
                return err;
            } if (data) {
                console.log("Upload Success", data.Location);
                return data.location;
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

export default imageFileHandler;