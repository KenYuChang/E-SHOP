import asyncHanlder from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHanlder(async (req, res) => {
  res.send('Add order items');
});

// @desc get login user orders
// @route GET /api/orders/mine
// @access private
const getMyOrders = asyncHanlder(async (req, res) => {
  res.send('get my orders');
});

// @desc get order by ID
// @route GET /api/orders/:id
// @access private/admin
const getOrderById = asyncHanlder(async (req, res) => {
  res.send('get order by Id');
});

// @desc update order to paid
// @route PUT /api/orders/:id/pay
// @access private
const updateOrderToPaid = asyncHanlder(async (req, res) => {
  res.send('update order to paid');
});

// @desc update order to deliver
// @route PUT /api/orders/:id/deliver
// @access private/admin
const updateOrderToDeliver = asyncHanlder(async (req, res) => {
  res.send('update order to deliver');
});

// @desc get all orders
// @route GET /api/orders
// @access private/admin
const getOrders = asyncHanlder(async (req, res) => {
  res.send('get orders');
});

export { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDeliver, getOrders };
