import {Request, Response} from 'express';
import { User} from '../../models/User';
import {getRepository} from "typeorm";

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

  const user : any = {
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

export default createNewUser