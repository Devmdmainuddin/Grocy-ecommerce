const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../../controllers/product');
const upload= require('../../middleware/multer-middleware')

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/',upload.single('image'), createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;