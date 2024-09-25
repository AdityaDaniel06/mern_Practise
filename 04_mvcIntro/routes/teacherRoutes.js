const express = require('express');

const route = express.Router();
const teacherController = require('../controllers/teacherController');

route.get('/teacherinfo', teacherController.teacherInfo);

route.get('/department', teacherController.department);
route.get('/salary', teacherController.salary);
route.get('/subject', teacherController.subject);

module.exports = route;
