import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Talent} from '../../models/Talent';
import {Pet} from '../../models/Pet';

let createDummyPetsWithTalents = async function (request : Request, response : Response){
  let Talents = getRepository(Talent);
  let Pets = getRepository(Pet);

  const talent1 = new Talent();
  talent1.name = "bungie-jumping";
  await Talents.save(talent1);

  const talent2 = await Talents.createQueryBuilder("talent").where("talent.id = :id", {id : 2}).getOne();

  const pet1 = await Pets.createQueryBuilder("pet").where("pet.id = :id", {id : 3}).getOne();
  pet1.talents = [talent1, talent2];
  await Pets.save(pet1);

  let context : any = {
    success : true,
    message : "Talent assigned to pet",
    pet : pet1
  }
  return response.status(200).json(context)
}

export default createDummyPetsWithTalents