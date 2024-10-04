const express = require("express");
const app = express();

const PORT = 5000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/clgStudent").then(() => {
  console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const studentRoutes = require("./routes/studentRoutes");
app.get("/", (req, res) => {
  res.send("This is the landing page, with additional routes");
});

app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
