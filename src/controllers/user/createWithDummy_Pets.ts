import {Request, Response } from 'express';
import {User} from '../../models/User';
import {Pet} from '../../models/Pet';

import {getRepository} from 'typeorm'

let createUserWithDummyPets = async function(request : Request, response : Response){
  let Users = getRepository(User);
  let Pets = getRepository(Pet);

  const dummyPet1 : Pet = new Pet();
  const dummyPet2 : Pet = new Pet();

  dummyPet1.age = 5;
  dummyPet1.color = "golden";
  dummyPet1.nickname = "Margaret";

  dummyPet2.age = 7;
  dummyPet2.color = "aubergine";
  dummyPet2.nickname = "Mocha";

  const dummyUser = await Users.createQueryBuilder("user").where("user.id = :id", {id : 4}).getOne();

  await Pets.save(dummyPet1);
  await Pets.save(dummyPet2);
  
  dummyUser.pets = [dummyPet1, dummyPet2];
  await Users.save(dummyUser);

  var context : any= {
    user : dummyUser,
    success : true,
    message : "User with dummy pets created"
  }

  return response.status(201).json(context);
}

export default createUserWithDummyPets
