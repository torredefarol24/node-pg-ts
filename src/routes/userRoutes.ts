import { Router } from 'express';
import UserController from '../controllers/userController';

import profileRouter from './profileRoutes';

let userRouter : Router = Router();

userRouter.get("/", UserController.getAll);
userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getSingleUser);
userRouter.patch("/:id", UserController.editUser);
userRouter.patch("/:id/profile", UserController.editUserProfile);
userRouter.delete("/:id", UserController.deleteUser);


export default userRouter;