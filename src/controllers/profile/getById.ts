import {Request, Response} from 'express';
import {Profile} from '../../models/Profile';
import { getRepository} from "typeorm";

let getProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {
    profile : null
  }

  let profileId: number = parseInt(request.params.id);

  if (!profileId || isNaN(profileId)){
    context.message = "Invalid Route Params";
    return response.status(404).json(context);
  }

  const profile = await Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();

  if (profile) {
    context.profile = profile;
    context.message = "Profile Found";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.success = false;
    context.message = "Profile Doesn't Exist";
    return response.status(404).json(context)
  }
}

export default getProfileById