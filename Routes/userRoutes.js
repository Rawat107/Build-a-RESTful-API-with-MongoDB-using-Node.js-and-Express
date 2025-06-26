import express from 'express';
import User from '../Models/User.js';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../Controller/userController.js';

const router = express.Router();

// Fetch all user
router.get('/users', getAllUsers);

// GET a specific user by MongoDB objectID
router.get('users/:id', getUserById)

// POST to create a new user
router.post('/user', createUser);

// PUT to update and existing user
router.put('/user/:id', updateUser )

// Delete the user by ObjectId
router.delete('/user/:id', deleteUser)


export default router;