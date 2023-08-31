import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from '../controllers/userController.js';

import { protect, admin } from '../middleware/auth.js';

// admin
router.get('/', protect, admin, getUsers);

router.post('/', registerUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

router.get('/:id', protect, admin, getUserByID);
router.delete('/:id', protect, admin, deleteUser);
router.put('/:id', protect, admin, updateUser);

export default router;
