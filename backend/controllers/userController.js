import asyncHanlder from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc Auth user & get token
// @route GET /api/users/login
// @access public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
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
