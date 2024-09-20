const empModel = require('../models/employeeModel');

const empDetails = (req, res) => {
  res.render();
};

const empSalary = (req, res) => {
  res.send('<h1>Employee Salary</h1>');
};

const landingPage = (req, res) => {
  res.render('home');
};

const about = (req, res) => {
  res.render('about');
};

const contact = (req, res) => {
  res.render('contact');
};

const saveData = (req, res) => {
  const { empId, empName, empCity, empSalary } = req.body;

  const empData = new empModel({
    empId: empId,
    name: empName,
    salary: empSalary,
    city: empCity,
  });

  empData.save();
  res.render('about');
};

module.exports = {
  empDetails,
  empSalary,
  landingPage,
  about,
  contact,
  saveData,
};
