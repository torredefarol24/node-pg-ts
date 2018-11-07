import {Request, Response} from 'express';
import {Talent} from '../../models/Talent';
import {getRepository} from "typeorm";

let getAllTalents = async function(request : Request, response : Response){
  const Talents = getRepository(Talent);
  const talentFindOptions = {
    relations : ["pets"]
  }
  const talents = await Talents.find(talentFindOptions);

  var context : any = {
    talents : null
  }

  if (talents.length > 0){
    context.talents = talents;
    context.message = "Fetched Talents from DB";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.message = "There are no Talents in DB";
    context.success = false;
    return response.status(200).json(context)
  }
}

export default getAllTalents