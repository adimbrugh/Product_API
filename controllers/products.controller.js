const Product = require('../models/products.model');


const getAllProducts = async(req,res)=> {
    const products = await Product.find();
    res.json(products);
};


const getProduct = async(req,res)=> {
    try {
        const product = await product.findById(req.params.productId);
        if(!product) {
            return res.status(404).json({message:"product not found"});
        }

        return res.json(product);

    } catch (error) {
        return res.status(404).json({message:"Invaled Object ID"})
    }
};


const addProduct = async(req,res)=> {


    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({success: true});
};


const updateProduct = async(req,res)=> {
    const productId = req.params.productId;
    try {
        const updateProduct = await Product.updateOne({_id:productId},{$set: { ...req.body}});
        return res.status(201).json(updateProduct);
        
    } catch (error) {
        return res.status(404).json({message:error});
    };
};


const deleteProduct = async(req,res)=> {
    const data = await Product.deleteOne({_id: req.params.productId});
    
    res.status(201).json({success:true, message:data});
};



module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}