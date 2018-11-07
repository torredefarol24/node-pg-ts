import {Request, Response} from 'express';
import {Talent} from '../../models/Talent';
import { getRepository} from "typeorm";

let getTalentById = async function(request : Request, response : Response){
  const Talents = getRepository(Talent);  

  var context: any = {
    talent : null
  }

  let talentId : number = parseInt(request.params.id);

  if (!talentId || isNaN(talentId)){
    context.message = "Invalid Route Params";
    return response.status(404).json(context);
  }

  const talent = await Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId }).getOne();

  if (talent) {
    context.talent = talent;
    context.message = "Talent Found";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.success = false;
    context.message = "Talent Doesn't Exist";
    return response.status(404).json(context)
  }
}

export default getTalentById