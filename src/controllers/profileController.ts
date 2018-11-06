import {Request, Response} from 'express';
import {Profile} from '../models/Profile';
import {getConnection, getRepository} from "typeorm";




let getAllProfiles = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);
  const profiles = await Profiles.find();

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




let createProfile = async function(request : Request, response : Response){ 
  const Profiles = getRepository(Profile);  

  var context: any = {}

  if (!request.body.gender || !request.body.username){
    context.message = "Request Body Keys Missing";
    return response.status(404).json(context);
  }

  const profile = {
    gender : request.body.gender.trim(),
    username : request.body.username.trim(),
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




let getProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {
    profile : null
  }

  let profileId = parseInt(request.params.id);

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




let editProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {
    profile : null
  }

  let profileId = parseInt(request.params.id);

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
    await Profiles.createQueryBuilder().update(Profile)
    .set({ gender: request.body.gender, username: request.body.username })
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




let deleteProfileById = async function(request : Request, response : Response){
  const Profiles = getRepository(Profile);  

  var context: any = {}
  let profileId = parseInt(request.params.id);

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

let profileController = {
  getAll : getAllProfiles,
  createNewProfile : createProfile,
  getSingleProfile : getProfileById,
  editProfile : editProfileById,
  deleteProfile : deleteProfileById
}

export default profileController