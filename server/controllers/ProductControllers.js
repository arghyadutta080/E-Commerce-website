const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apiFeatures")


// can be only accessed by admin
const createProduct = asyncErrorHandler(async (req, res, next) => {
    const productDetails = req.body;
    // creating new document
    const createdProduct = new Product(productDetails);
    const savedProduct = await createdProduct.save();

    res.status(201).json({
        success: true,
        savedProduct
    })
});


// for public views
const getAllProducts = asyncErrorHandler(async (req, res, next) => {
    // calling ApiFeatures class
    const apiFeature = new ApiFeatures(Product.find(), req.query).search()
    const products = await apiFeature;

    res.status(200).json({
        success: true,
        products
    })
})


// for public views
const getProduct = asyncErrorHandler(async (req, res, next) => {
    const productId = req.params.id
    const findProduct = await Product.findById(productId)

    // handle the case when product is not found
    if (!findProduct) {
        return next(new ErrorHandler("Product not found", 404))
    }
    // handle the case when product is found
    res.status(200).json({
        success: true,
        findProduct
    })
})


// can be only accessed by admin
const updateProduct = asyncErrorHandler(async (req, res, next) => {
    const productId = req.params.id;
    const updatedProductFields = req.body;

    const findProduct = await Product.findByIdAndUpdate(productId, updatedProductFields, { new: true });

    // handling the case when the product is not found
    if (!findProduct) {
        return next(new ErrorHandler("Product not found", 404))
    }
    // handling the case when the product is found
    res.status(200).json({
        success: true,
        findProduct
    })
})


// can be only accessed by admin
const deleteProduct = asyncErrorHandler(async (req, res, next) => {
    const productId = req.params.id;
    const findProduct = await Product.findByIdAndDelete(productId)

    // handling the case when product is not found
    if (!findProduct) {
        return next(new ErrorHandler("Product not found", 404))
    }
    // handling the case when product is found
    res.status(200).json({
        success: true,
        message: "product is deleted successfully"
    })
})


module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}; 