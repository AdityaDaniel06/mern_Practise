const express = require("express");
const route = express.Router();

const studentController = require("../controllers/studentController");
route.get("/", studentController.getAllStudent);

route.get("/studentDetails", studentController.stuDetails);
route.post("/studentSearch", studentController.getStudent);

route.post("/saveData", studentController.saveStudentData);

module.exports = route;
