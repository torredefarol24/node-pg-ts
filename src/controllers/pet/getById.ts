import {Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import { getRepository} from "typeorm";

let getPetById = async function(request : Request, response : Response){
  const Pets = getRepository(Pet);  

  var context: any = {
    Pet : null
  }

  let petId : number = parseInt(request.params.id);

  if (!petId || isNaN(petId)){
    context.message = "Invalid Route Params";
    return response.status(404).json(context);
  }

  const pet = await Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId }).getOne();

  if (pet) {
    context.pet = pet;
    context.message = "Pet Found";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.success = false;
    context.message = "Pet Doesn't Exist";
    return response.status(404).json(context)
  }
}

export default getPetById