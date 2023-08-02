const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProduct } = require('../controllers/ProductControllers');
const route = express.Router();

route.get('/', getAllProducts);
route.get('/:id', getProduct)
route.post('/create', createProduct);
route.put('/update/:id', updateProduct);
route.delete('/delete/:id', deleteProduct);

module.exports = route;