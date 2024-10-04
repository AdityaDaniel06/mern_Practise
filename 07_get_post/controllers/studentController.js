const studentModel = require("../models/studentModel");

const getAllStudents = async (req, res) => {
  const { name, age, mark, branch, address } = req.body;
  //GET Fetch all students from the database
  const students = await studentModel.find({});
  res.send(students);
};

const addNewStudent = (req, res) => {
  console.log(req);
  const { name, age, mark, branch, address } = req.body;
  //POST Add new student to the database
  const studentData = new studentModel({
    studentName: name,
    studentAge: age,
    studentMark: mark,
    studentBranch: branch,
    studentAddress: address,
  });
  studentData.save();
  res.send("Student Data Saved Successfully");
};

const createStudent = async (req, res) => {
  const { name, age, grade, roll } = req.body;
  //POST Add new student to the database using create method
  const studentData = studentModel.create({
    studentName: name,
    studentAge: age,
    studentMark: mark,
    studentBranch: branch,
    studentAddress: address,
  });

  res.send(studentData);
};

module.exports = {
  getAllStudents,
  addNewStudent,
  createStudent,
};
