import { Request, Response} from 'express';
import {Pet} from '../../models/Pet';
import {User} from '../../models/User';
import {getRepository} from 'typeorm';

let createPetWithStaticUser = async function(request : Request, response : Response){ 
  const Pets = getRepository(Pet);  
  const Users = getRepository(User);

  var context: any = {}

  if (!request.body.age || !request.body.color || !request.body.nickname){
    context.message = "Request Body Keys Missing";
    return response.status(404).json(context);
  }

  const staticUser = await Users.createQueryBuilder("user").where("user.id = :id", {id : 3}).getOne();

  const pet : any = {
    color : request.body.color.trim(),
    age : request.body.age.trim(),
    nickname : request.body.nickname.trim(),
    owner : staticUser
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

export default createPetWithStaticUser