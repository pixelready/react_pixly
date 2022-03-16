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

  const result = await imageFileHandler.saveToStorage(req.file);

  // const fileStream = fs.readStream(req.file.path);
  // const exifData = extractExif(fileStream);


  console.log("SUCCESS! RESULT:", result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
