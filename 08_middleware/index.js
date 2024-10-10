// const express = require("express");
// const middleware = require("./middleware/middleWare.js");
import express from "express";
const app = express();

import middleware from "./middleware/middleWare.js";
const myName = (req, res, next) => {
  console.log("My Name middleware");
  req.MyData = "aditya";
  next();
};
app.use(myName);
app.use(middleware);

app.get("/", (req, res, next) => {
  console.log("home page");
  console.log(req.MyData);
  res.send("Welcome to the home page!" + req.MyData);
  next();
});

app.listen(3500);
