const express = require('express');
const { createProduct } = require('../controllers/ProductControllers');
const route = express.Router();

route.post('/create', createProduct);

module.exports = route;