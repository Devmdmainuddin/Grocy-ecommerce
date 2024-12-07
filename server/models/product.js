const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descaption: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    dimensions: { type: String, required: true },
    weight: { type: String, required: true },
    stock_levels: { type: Number, required: true },
    image: { type: String, required: true }, // Will store the image URL
    color: { type: String, required: true },
    tags: [String],
    return_policy: { type: String, required: true },
    warranty_information: { type: String, required: true },
    availability_status: { type: String, required: true },
    minimum_order_quantity: { type: Number, required: true },
    shipping_cost: { type: Number, required: true },

    // tag01: { type: String, required: true, },
    // tag02: {type: String, required: true,},
    // tag03: {type: String,required: true,},

}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Product", ProductSchema);
