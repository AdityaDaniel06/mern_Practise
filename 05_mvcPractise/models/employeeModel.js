const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  empId: Number,
  name: String,
  salary: Number,
  city: String,
});
module.exports = mongoose.model('employee', empSchema);
