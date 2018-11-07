import {Request, Response} from 'express';
import {Profile} from '../../models/Profile';
import {getRepository} from "typeorm";

let getAllProfiles = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);
  const profileFindOptions = {
    relations : ["user"]
  }
  const profiles = await Profiles.find(profileFindOptions);

  var context : any = {
    profiles : null
  }

  if (profiles.length > 0){
    context.profiles = profiles;
    context.message = "Fetched Profiles from DB";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.message = "There are no Profiles in DB";
    context.success = false;
    return response.status(200).json(context)
  }
}

export default getAllProfiles