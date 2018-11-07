import { Request, Response} from 'express';
import {Talent} from '../../models/Talent';
import {getRepository} from 'typeorm';

let createTalent = async function(request : Request, response : Response){ 
  const Talents = getRepository(Talent);  

  var context: any = {}

  if (!request.body.name){
    context.message = "Request Body Keys Missing";
    return response.status(404).json(context);
  }

  const talent : any = {
    name : request.body.name.trim()
  }

  try {
    let result = await Talents.save(talent);
    context.talent = result;
    context.message = "Talent Created";
    context.success = true;
    return response.status(201).json(context);
  } catch (error){
    context.success = false;
    context.message = error;
    return response.status(404).json(context);
  }
}

export default createTalent