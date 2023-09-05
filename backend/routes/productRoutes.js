import express from 'express';
const router = express.Router();
import { getProductById, getProducts, createProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/auth.js';
import { create } from 'express-handlebars';

router.get('/', getProducts);
router.post('/', protect, admin, createProduct);
router.get('/:id', getProductById);

export default router;
