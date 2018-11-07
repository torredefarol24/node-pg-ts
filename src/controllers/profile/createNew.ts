import {Request, Response} from 'express';
import {Profile} from '../../models/Profile';
import { getRepository} from "typeorm";

let createProfile = async function(request : Request, response : Response){ 
  const Profiles = getRepository(Profile);  

  var context: any = {}

  if (!request.body.gender || !request.body.username || !request.body.bio){
    context.message = "Request Body Keys Missing";
    return response.status(404).json(context);
  }

  const profile : any = {
    gender : request.body.gender.trim(),
    username : request.body.username.trim(),
    bio : request.body.bio.trim()
  }

  try {
    let result = await Profiles.save(profile);
    context.profile = result;
    context.message = "Profile Created";
    context.success = true;
    return response.status(201).json(context);
  } catch (error){
    context.success = false;
    context.message = error;
    return response.status(404).json(context);
  }
}

export default createProfile