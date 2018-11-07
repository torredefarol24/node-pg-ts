import {Request, Response} from 'express';
import {Talent} from '../../models/Talent';
import { getRepository} from "typeorm";

let editTalentById = async function(request : Request, response : Response){
  const Talents = getRepository(Talent);  

  var context: any = {
    talent : null
  }

  let talentId : number = parseInt(request.params.id);

  if (!talentId || isNaN(talentId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }
  
  if (!request.body.name){
    context.message = "Request Body Keys Missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const talent = await Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId}).getOne();

  if (talent){

    let talentParams: any = {
      name : request.body.name.trim()
    }

    await Talents.createQueryBuilder().update(Talent)
    .set(talentParams)
    .where("id = :id", { id: talentId }).execute();

    const updatedTalent = await Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId }).getOne();

    context.talent = updatedTalent;
    context.success = true;
    context.message = "Talent Updated";
    return response.status(200).json(context);
  } else {
    context.success = false;
    context.message = "Talent Not Found";
    return response.status(404).json(context);
  }
}

export default editTalentById