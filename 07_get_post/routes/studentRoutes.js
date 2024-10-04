const express = require("express");

const route = express.Router();

const studentController = require("../controllers/studentController");

route.get("/v1/getAllStudent", studentController.getAllStudents);
route.post("/v1/addStudent", studentController.addNewStudent);
module.exports = route;
