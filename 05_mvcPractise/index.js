const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/adityaDb').then(() => {
  console.log('Database connected');
});
// body parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
const empRoute = require('./routes/employeeRoutes');
const productRoute = require('./routes/productRoutes');

app.use('/emp', empRoute);
app.use('/', productRoute);

app.listen(7000);
