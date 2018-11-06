import { Router} from 'express';
import ProfileController from '../controllers/profileController';

let profileRouter = Router();

profileRouter.get("/", ProfileController.getAll);
profileRouter.post("/", ProfileController.createNewProfile);
profileRouter.get("/:id", ProfileController.getSingleProfile);
profileRouter.patch("/:id", ProfileController.editProfile);
profileRouter.delete("/:id", ProfileController.deleteProfile);

export default profileRouter;