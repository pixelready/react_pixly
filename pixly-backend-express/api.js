import EXIF from "exif-js";

const SAVE_IMAGE_PATH = "../images/";

class imageFileHandler{
    static async saveToStorage(){
        //TODO: write file to public images folder
        //TODO: update to point to S3
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