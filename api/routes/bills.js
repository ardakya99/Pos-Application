const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();


router.get("/get-all", async (req,res)=> {
    try{
        const bills = await Bill.find(); 
        res.send(bills);
    }catch (error){
            console.log(error); 
    }
})

router.post("/add-bill", async(req, res) => {
    try{
        const newBill = new Bill(req.body);
        await newBill.save();
        res.status(200).json("Item added sucessfully.");
    }catch(error) {
        res.status(500).json(error)
    }
})


module.exports = router;