// import express from "express";
// import imageFileHandler from "./api";
const imageFileHandler = require("./api.js");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/images", async (req, res) => {
  //TODO: update req.file to proper file name

  const result = await imageFileHandler.saveToStorage(req.image);
  console.log("SUCCESS! RESULT:", result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
