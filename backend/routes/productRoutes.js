import express from 'express';
const router = express.Router();
import asyncHanlder from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get('/', asyncHanlder(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }));
router.get('/:id', asyncHanlder(async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
}));

export default router