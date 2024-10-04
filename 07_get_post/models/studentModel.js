const mongoose = require("mongoose");

const clgSchema = new mongoose.Schema({
  studentName: String,
  studentAge: Number,
  studentMark: Number,
  studentBranch: String,
  studentAddress: String,
});

module.exports = mongoose.model("clgStudent", clgSchema);
