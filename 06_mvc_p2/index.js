const express = require("express");
const app = express();

const PORT = 8000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/studentDb").then(() => {
  console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const stuRoute = require("./routes/studentRoute");
app.use("/student", stuRoute);
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
