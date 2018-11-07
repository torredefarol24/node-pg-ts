import { Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import {getRepository} from 'typeorm';

let getAll = async function(request : Request , response : Response){
  const Pets = getRepository(Pet);
  const petFindOptions = {
    relations: ["owner", "talents"]  
  }
  const pets = await Pets.find(petFindOptions);

  var context : any = {
    pets : null
  }

  if (pets.length > 0){
    context.pets = pets;
    context.message = "Fetched Pets from DB";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.message = "There are no Pets in DB";
    context.success = false;
    return response.status(200).json(context)
  }
}

export default getAll