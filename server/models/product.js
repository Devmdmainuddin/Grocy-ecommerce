const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter your product title!"],
    },
    description: {
        type: String,
        required: [true, "Please enter your product description!"],
    },
    category: {
        type: String,
        required: [true, "Please enter your product category!"],
    },
    brand: {
        type: String,
        required: [true, "Please enter your product brand!"],
    },
    tags: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        required: [true, "Please enter your product price!"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter your product stock!"],
    },
    // image: [
    //     {
    //         public_id: {
    //             type: String,
    //             required: true,
    //         },
    //         url: {
    //             type: String,
    //             required: true,
    //         },
    //     },
    // ],
    warranty_information: {
        type: String,
        required: [true, "Please enter your product warranty_information!"],
    },
    dimensions: {
        type: String,
        required: [true, "Please enter your product dimensions!"],
    },
    color: {
        type: String,
        required: [true, "Please enter your product color!"],
    },
    weight: {
        type: String,
        required: [true, "Please enter your product weight!"],
    },
    availability_status: {
        type: String,
    },
    return_policy: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Product", ProductSchema);
