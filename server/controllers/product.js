const express = require('express');
const Product= require('../models/product');

// GET: Fetch all products
const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch products', error });
    }
  };

  // GET: Fetch a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch product', error });
    }
  };
  
  // POST: Add a new product
const createProduct = async (req, res) => {
    const product = req.body;
    try {
      const newProduct = new Product(product);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ success: false, message: 'Failed to create product', error });
    }
  };

// PATCH: Update a product by ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ success: false, message: 'Failed to update product', error });
    }
  };

  // DELETE: Delete a product by ID
  const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete product', error });
    }
  };
  
  module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };

  