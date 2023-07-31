const Product = require("../models/ProductModel");

const createProduct = async (req, res, next) => {
    const { name, description, price, countInStock, rating, category, imageUrl, review } = req.body;
    try {
        const createdProduct = new Product({
            name,
            description,
            price,
            countInStock,
            rating,
            category,
            imageUrl,
            review
        });
        const savedProduct = await createdProduct.save();
        res.status(201).json({
            success: true,
            savedProduct
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct
};