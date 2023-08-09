import express from "express";
import { createUser, loginUser, getUsers, getUserById, updateUser } from "../controllers/userController";
import { jwtauthenticator } from "../middlewares/auth";
const router = express.Router();

router.get('/getAll', jwtauthenticator, getUsers);
router.get('/get/:_id', getUserById);
router.patch('/update/:_id',jwtauthenticator,updateUser);
router.post('/create', createUser);
router.post('/login', loginUser);

export default router;