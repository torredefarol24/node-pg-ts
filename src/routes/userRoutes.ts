import { Router } from 'express';
import UserController from '../controllers/userController';

let userRouter : Router = Router();

userRouter.get("/", UserController.getAll);
userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getSingleUser);
userRouter.patch("/:id", UserController.editUser);

export default userRouter;