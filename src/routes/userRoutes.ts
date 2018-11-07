import { Router } from 'express';
import UserController from '../controllers/user';

let userRouter : Router = Router();

userRouter.get("/", UserController.getAll);
userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getSingleUser);
userRouter.patch("/:id", UserController.editUser);
userRouter.patch("/:id/profile", UserController.editUserProfile);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.get("/test/pets", UserController.createWithDummyPets);

export default userRouter;