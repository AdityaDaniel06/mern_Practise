const express = require('express');

const productController = require('../controllers/productController');
const route = express.Router();

route.get('/', productController.productLanding);

// route.get('/productInfo', productController.productInfo);
// route.get('/productPrice', productController.productPrice);
// route.get('/productStatus', productController.productStatus);

route.get('/about', productController.about);
route.get('/contact', productController.contact);
route.get('/productList', productController.productList);

module.exports = route;
