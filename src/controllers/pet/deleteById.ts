import {Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import {getRepository} from 'typeorm';

let deletePetById = async function(request : Request, response : Response){
  const Pets = getRepository(Pet);
  var context : any = {};
  
  let petId: number = parseInt(request.params.id);

  if (!petId || isNaN(petId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const pet = await Pets.createQueryBuilder("pet").where("pet.id = :id", { id : petId}).getOne();

  if (pet){
    await Pets.createQueryBuilder().delete().from(Pet).where("id = :id", { id: petId }).execute();

    context.message = "Pet Deleted";
    context.success = true;
    return response.status(200).json(context);
  } else {
    context.message = "Pet Not Found";
    context.success = false;
    return response.status(404).json(context);
  }
}

export default deletePetById