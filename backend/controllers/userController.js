import asyncHanlder from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route GET /api/users/login
// @access public
const authUser = asyncHanlder(async (req, res) => {
  res.send('auth user');
});

// @desc register user
// @route POST /api/users
// @access public
const registerUser = asyncHanlder(async (req, res) => {
  res.send('register user');
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHanlder(async (req, res) => {
  res.send('logout user');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHanlder(async (req, res) => {
  res.send('get user profile');
});

// @desc Get user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHanlder(async (req, res) => {
  res.send('update user profile');
});

// @desc Get users
// @route GET /api/users
// @access private => admin
const getUsers = asyncHanlder(async (req, res) => {
  res.send('get users');
});

// @desc Get users by id
// @route GET /api/users/:id
// @access private => admin
const getUserByID = asyncHanlder(async (req, res) => {
  res.send('get users by ID');
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access private => admin
const deleteUser = asyncHanlder(async (req, res) => {
  res.send('delete user');
});

// @desc Update user
// @route PUT /api/users/:id
// @access private => admin
const updateUser = asyncHanlder(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
