const express = require("express");
const app = express();

const dotenv = require("dotenv");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_NAME).then(() => {
  console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const studentRoutes = require("./routes/studentRoutes");
app.get("/", (req, res) => {
  res.send("This is the landing page, with additional routes");
  console.log(process.env.NODE_ENV);
});

app.use("/students", studentRoutes);
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
