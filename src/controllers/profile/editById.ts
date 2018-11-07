import {Request, Response} from 'express';
import {Profile} from '../../models/Profile';
import { getRepository} from "typeorm";

let editProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {
    profile : null
  }

  let profileId : number = parseInt(request.params.id);

  if (!profileId || isNaN(profileId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }
  
  if (!request.body.gender || !request.body.username){
    context.message = "Request Body Keys Missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const profile = await Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId}).getOne();

  if (profile){

    let profileParams: any = {
      gender: request.body.gender.trim(), 
      username: request.body.username.trim()
    }

    await Profiles.createQueryBuilder().update(Profile)
    .set(profileParams)
    .where("id = :id", { id: profileId }).execute();

    const updatedProfile = await Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();

    context.profile = updatedProfile;
    context.success = true;
    context.message = "Profile Updated";
    return response.status(200).json(context);
  } else {
    context.success = false;
    context.message = "Profile Not Found";
    return response.status(404).json(context);
  }
}

export default editProfileById