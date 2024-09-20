const studentInfo = (req, res) => {
  res.send('<h1>Students Information through controller </h1>');
};

const studentResult = (req, res) => {
  res.send('<h1>Students Result!!</h1>');
};
const studentFee = (req, res) => {
  res.send('<h1>Students Fee!!</h1>');
};

module.exports = {
  studentInfo,
  studentResult,
  studentFee,
};
