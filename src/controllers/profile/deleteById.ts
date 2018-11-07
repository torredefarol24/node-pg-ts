import {Request, Response} from 'express';
import {Profile} from '../../models/Profile';
import { getRepository} from "typeorm";

let deleteProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {}
  let profileId: number = parseInt(request.params.id);

  if (!profileId || isNaN(profileId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const profile = await Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();

  if (profile){
    await Profiles.createQueryBuilder().delete().from(Profile).where("id = :id", { id: profileId }).execute();

    context.message = "Profile Deleted";
    context.success = true;
    return response.status(200).json(context);
  } else {
    context.message = "Profile Not Found";
    context.success = false;
    return response.status(404).json(context);
  }

}

export default deleteProfileById