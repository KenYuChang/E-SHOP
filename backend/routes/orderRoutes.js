import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getOrders,
} from '../controllers/orderController.js';

import { protect, admin } from '../middleware/auth.js';

// admin
router.get('/', protect, admin, getOrders);

router.post('/', protect, addOrderItems);
router.get('/mine', protect, getMyOrders);
router.get('/:id', protect, admin, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDeliver);

export default router;
