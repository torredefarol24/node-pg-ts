import {Router} from 'express';
import TalentController from '../controllers/talent'

let talentRouter : Router = Router();

talentRouter.get("/", TalentController.getAllTalents);
talentRouter.post("/", TalentController.createNewTalent);
talentRouter.get("/:id", TalentController.getSingleTalent);
talentRouter.patch("/:id", TalentController.editTalent);
talentRouter.delete("/:id", TalentController.deleteTalent);
talentRouter.get("/test/pets", TalentController.createPetsWithDummyTalents);

export default talentRouter