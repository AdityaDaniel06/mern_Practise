const express = require('express');
const route = express.Router();

const empController = require('../controllers/empController');

route.get('/empDetails', empController.empDetails);
route.get('/empSalary', empController.empSalary);

route.post('/saveData', empController.saveData);

module.exports = route;
