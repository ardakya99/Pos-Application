const mongoose = require('mongoose');

const BillSchema = mongoose.Schema(
    {
        customerName: {type: String, require:true},
        customerPhoneNumber: {type: String, require:true},
        paymentMethod: {type: Number, require:true },
        subTotal: {type: Number, require:true},
        cartItems: {type: Array, require:true},
        tax: {type: Number, require:true},
        totalAmount: {type: Number, require:true}
    },
    { timestamps:true }
)

const Bill = mongoose.model("bills", BillSchema);

module.exports = Bill;