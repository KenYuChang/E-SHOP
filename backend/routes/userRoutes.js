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

// admin
router.get('/', getUsers);

router.post('/', registerUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.get('/profile', getUserProfile);
router.put('profile', updateUserProfile);

router.get('/:id', getUserByID);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
