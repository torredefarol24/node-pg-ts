import {Request, Response} from 'express';
import { User} from '../models/User';
import { Profile } from '../models/Profile';
import {getRepository} from "typeorm";




let getAllUsers = async function(request : Request, response : Response){
  const Users = getRepository(User);
  const users = await Users.find();

  const context: any = {
    users : null
  }

  if (users.length > 0){
    context.users = users;
    context.success = true;
    context.message = "Users Retrieved from DB";
    return response.status(200).json(context)
  } else {
    context.success = false;
    context.message = "There are no Users in DB";
    return response.status(200).json(context)
  }
}




let createNewUser = async function(request: Request, response : Response){
  const Users = getRepository(User);
  
  const context: any = {
    user : null
  }

  if (!request.body.firstName || !request.body.lastName || !request.body.email){
    context.message = "Request Body Keys Missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = {
    firstName : request.body.firstName.trim(),
    lastName : request.body.lastName.trim(),
    email : request.body.email.trim()
  }

  try {
    await Users.save(user);
    context.success = true;
    context.user = user;
    context.message = "User Created";
    return response.status(201).json(context);
  } catch(error){
    context.success = false;
    context.message = error.detail
    return response.status(500).json(context)
  }
}




let getUserById = async function (request : Request, response : Response){
  const Users = getRepository(User);

  var context :any = {
    user : null
  }

  let userId = parseInt(request.params.id);

  if (!userId || isNaN(userId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();

  if (user) {
    context.user = user;
    context.message = "User Found";
    context.success = true;
    return response.status(200).json(context)
  } else {
    context.message = "User Doesn't Exist";
    context.success = false;
    return response.status(404).json(context)
  }
}




let patchUserById = async function(request : Request, response : Response){
  const Users = getRepository(User);
  
  var context :any = {
    user : null
  }

  let userId = parseInt(request.params.id);

  if (!userId || isNaN(userId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  if (!request.body.firstName || !request.body.lastName){
    context.message = " Request Body Keys missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();

  if (user){
    await Users.createQueryBuilder().update(User)
    .set({ firstName: request.body.firstName, lastName: request.body.lastName })
    .where("id = :id", { id: userId }).execute();

    const updatedUser = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId}).getOne();

    context.user = updatedUser;
    context.message = "User Updated";
    context.success = true;
    return response.status(200).json(context);
  } else {
    context.message = "User Not Found";
    context.success = false;
    return response.status(404).json(context);
  }
}




let deleteUserById = async function(request: Request, response : Response){
  const Users = getRepository(User);
  
  var context :any = {}
  let userId = parseInt(request.params.id);

  if (!userId || isNaN(userId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();

  if (user){
    await Users.createQueryBuilder().delete().from(User).where("id = :id", { id: userId }).execute();
    context.message = "User Deleted";
    context.success = true;
    return response.status(200).json(context);  
  } else {
    context.message = "User not Found";
    context.success = false;
    return response.status(404).json(context)
  }
}




let patchUserById_UserProfile = async function(request : Request, response : Response){
  const Users = getRepository(User);
  const Profiles = getRepository(Profile);
  
  var context :any = {
    user : null
  }

  let userId = parseInt(request.params.id);

  if (!userId || isNaN(userId)){
    context.message = "Invalid Route Params";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).leftJoinAndSelect("user.profile", "profile").getOne();
  
  if (user){
    context.user = user;
    
    if (user.profile == null){
      let userProfile = new Profile();
      userProfile.gender = request.body.gender;
      userProfile.username = request.body.username;
      
      try {
        await Profiles.save(userProfile);
        user.profile = userProfile;
        await Users.save(user);
        context.success = true;
        return response.status(200).json(context);
      } catch (error) {
        context.success = false;
        context.message = error.detail;
        return response.status(500).json(context);
      }
      
    } else {
  
      let userNewProfile = await Profiles.createQueryBuilder("profile").where("profile.id =:id", {id : user.profile.id}).getOne();
  
      userNewProfile.gender = request.body.gender;
      userNewProfile.username = request.body.username;
      
      try {
        await Profiles.save(userNewProfile);
        user.profile = userNewProfile;
        context.success = true;
        context.message = "User Profile Updated"
        return response.status(200).json(context);
      } catch (error){
        context.success = false;
        context.message = error.detail;
        return response.status(500).json(context);
      }
    }

  } else {
    context.message = "User Doesn't Exist";
    context.success = false;
    return response.status(404).json(context);
  }
    
}


let UserController = {
  getAll : getAllUsers,
  createUser : createNewUser,
  getSingleUser : getUserById,
  editUser : patchUserById,
  deleteUser : deleteUserById,
  editUserProfile : patchUserById_UserProfile
}


export default UserController