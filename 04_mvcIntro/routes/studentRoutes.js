const express = require('express');

const route = express.Router();
const studentController = require('../controllers/studentController');

route.get('/', studentController.getStudent);

route.get('/studentinfo', studentController.studentInfo);

route.get('/result', studentController.studentResult);

route.get('/fee', studentController.studentFee);

module.exports = route;
