import asyncHanlder from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHanlder(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('no order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc get login user orders
// @route GET /api/orders/mine
// @access private
const getMyOrders = asyncHanlder(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc get order by ID
// @route GET /api/orders/:id
// @access private/admin
const getOrderById = asyncHanlder(async (req, res) => {
  // add user name and email => populate
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
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
