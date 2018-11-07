import { Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import {getRepository} from 'typeorm';

let createPet = async function(request : Request, response : Response){ 
  const Pets = getRepository(Pet);  

  var context: any = {}

  if (!request.body.age || !request.body.color || !request.body.nickname){
    context.message = "Request Body Keys Missing";
    return response.status(404).json(context);
  }

  const pet : any = {
    color : request.body.color.trim(),
    age : request.body.age.trim(),
    nickname : request.body.nickname.trim()
  }

  try {
    let result = await Pets.save(pet);
    context.pet = result;
    context.message = "Pet Created";
    context.success = true;
    return response.status(201).json(context);
  } catch (error){
    context.success = false;
    context.message = error;
    return response.status(404).json(context);
  }
}

export default createPet