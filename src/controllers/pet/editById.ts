import {Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import { getRepository} from "typeorm";

let editPetById = async function(request : Request, response : Response){
  const Pets = getRepository(Pet);  

  var context: any = {
    pet : null
  }

  let petId : number = parseInt(request.params.id);

  if (!petId || isNaN(petId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }
  
  if (!request.body.age || !request.body.color || !request.body.nickname){
    context.message = "Request Body Keys Missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const pet = await Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId}).getOne();

  if (pet){

    let petParams: any = {
      age: request.body.age.trim(),
      color: request.body.color.trim(),
      nickname : request.body.nickname.trim()
    }

    await Pets.createQueryBuilder().update(Pet)
    .set(petParams)
    .where("id = :id", { id: petId }).execute();

    const updatedPet = await Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId }).getOne();

    context.pet = updatedPet;
    context.success = true;
    context.message = "Pet Updated";
    return response.status(200).json(context);
  } else {
    context.success = false;
    context.message = "Pet Not Found";
    return response.status(404).json(context);
  }
}

export default editPetById