const studentModel = require("../models/studentModel");

// const stuDetails = (req, res) => {
//   res.send("<h1>Student Details</h1>");
// };

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

const searchByQuery = async (req, res) => {
  console.log(req);
  const { name, grade, roll } = req.query;
  const data = await studentModel.find({
    $and: [{ name: name, grade: grade }],
  });
  res.send(data);
};

const createStudent = async (req, res) => {
  const { name, age, grade, roll } = req.body;
  const studentData = await studentModel.create({
    name: name,
    age: age,
    grade: grade,
    rollNo: roll,
  });

  res.send(studentData);
};

module.exports = {
  saveStudentData,
  getStudent,
  searchByQuery,
  createStudent,
};
