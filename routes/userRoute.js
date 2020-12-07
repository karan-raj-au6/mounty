import express from "express"
const router = express.Router();

import { signup, updateUser, getAllUsers, getUser, deleteUser, deleteMe } from '../controller/userController.js'

router.post('/signup', signup)
router.route('/').get(getAllUsers)
router.delete('/delete-me', deleteMe);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

export default router