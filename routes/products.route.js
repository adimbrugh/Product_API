const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');



router.route('/')
            .get(productController.getAllProducts)
            .post(productController.addProduct);


route.route('/:productId')
                    .get(productController.getProduct)
                    .update(productController.updateProduct)
                    .delete(productController.deleteProduct);



module.exports = router ;