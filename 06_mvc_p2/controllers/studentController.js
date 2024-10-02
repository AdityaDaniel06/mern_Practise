const studentModel = require("../models/studentModel");

const getAllStudent = (req, res) => {
  res.send("<h1>Gettiing all the Students</h1>");
};

const stuDetails = (req, res) => {
  res.send("<h1>Student Details</h1>");
};

const saveStudentData = (req, res) => {
  const { age, name, grade, roll } = req.body;
  const studentData = new studentModel({
    name: name,
    age: age,
    grade: grade,
    rollNo: roll,
  });
  studentData.save();
  res.send("Student Data Saved Successfully");
};

const getStudent = async (req, res) => {
  const { studentData } = req.body;
  const data = await studentModel.find({ rollNo: studentData });
  console.log(data);
  res.send(data);
};

module.exports = {
  getAllStudent,
  stuDetails,
  saveStudentData,
  getStudent,
};
