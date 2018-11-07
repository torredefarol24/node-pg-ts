import {Router} from 'express';
import PetController from '../controllers/pet';

let petRouter : Router = Router();

petRouter.get("/", PetController.getAllPets);
petRouter.post("/", PetController.createNewPet);
petRouter.get("/:id", PetController.getSinglePet);
petRouter.patch("/:id", PetController.editSinglePet);
petRouter.delete("/:id", PetController.deleteSinglePet);
petRouter.post("/static", PetController.createWithStaticUser);

export default petRouter