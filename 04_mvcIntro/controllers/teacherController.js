const teacherInfo = (req, res) => {
  res.send('Teacher Information');
};
const department = (req, res) => {
  res.send('Teacher Department');
};
const salary = (req, res) => {
  res.send('Teacher Salary');
};

module.exports = {
  teacherInfo,
  department,
  salary,
};
