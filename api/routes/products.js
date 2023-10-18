const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();


router.get("/get-all", async (req,res)=> {
    try{
        const products = await Product.find();
        res.send(products);
    }catch (error){
            console.log(error); 
    }
})
router.put("/update-product", async (req,res)=> {
    try{
        await Product.findOneAndUpdate({ _id: req.body.productId}, req.body);
        res.status(200).json("Item updated sucessfully.");
    }catch (error){
            console.log(error);
    }
})

router.delete("/delete-product", async (req,res)=> {
    try{
        await Product.findOneAndDelete({ _id: req.body.productId});
        res.status(200).json("Item deleted sucessfully.");
    }catch (error){
            console.log(error);
    }
})


router.post("/add-product", async(req, res) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json("Item added sucessfully.");
    }catch(error) {
        res.status(500).json(error)
    }
})


module.exports = router;