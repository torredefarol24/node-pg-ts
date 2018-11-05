import { Router } from 'express';
import UserController from '../controllers/userController';

let userRouter : Router = Router();

userRouter.get("/", UserController.getAll);

export default userRouter;