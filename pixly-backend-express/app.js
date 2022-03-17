// import express from "express";
// import imageFileHandler from "./api";
const imageFileHandler = require("./api.js");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { extractExif } = require("./api.js");
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());

// process JSON body => req.body
app.use(express.json());

// process traditional form data => req.body
app.use(express.urlencoded({ extended: true }));

const upload = multer({dest:'./uploads/'});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/images", upload.single('image'), async (req, res) => {
  //TODO: update req.file to proper file name
  console.log("REQ.FILE", req.file);

  console.log("REQ.BODY.IMAGE:",req.body);
  // console.log("REQ.FILE", req.file);

  const s3ImagePath = await imageFileHandler.saveToStorage(req.file);
  console.log("S3 UPLOADED, PATH:", s3ImagePath );
  const exifMeta = await imageFileHandler.extractExif(req.file);
  console.log("EXIF META: ", exifMeta)

    const dbFields = {filename: req.file.name, s3ImagePath: s3ImagePath, ...exifMeta};
    // TODO: save dbFields to PSQL DB
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
