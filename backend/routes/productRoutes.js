import express from 'express';
const router = express.Router();
import { getProductById, getProducts, createProduct, updateProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/auth.js';

router.get('/', getProducts);
router.post('/', protect, admin, createProduct);
router.get('/:id', getProductById);
router.put('/:id', protect, admin, updateProduct);
export default router;
