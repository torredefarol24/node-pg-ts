import {Request, Response} from 'express';
import {Talent} from '../../models/Talent';
import {getRepository} from 'typeorm';

let deleteTalentById = async function(request : Request, response : Response){
  const Talents = getRepository(Talent);
  var context : any = {};
  
  let talentId: number = parseInt(request.params.id);

  if (!talentId || isNaN(talentId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const talent = await Talents.createQueryBuilder("talent").where("talent.id = :id", { id : talentId}).getOne();

  if (talent){
    await Talents.createQueryBuilder().delete().from(Talent).where("id = :id", { id: talentId }).execute();

    context.message = "Talent Deleted";
    context.success = true;
    return response.status(200).json(context);
  } else {
    context.message = "Talent Not Found";
    context.success = false;
    return response.status(404).json(context);
  }
}

export default deleteTalentById