import {Request, Response} from 'express';
import { User} from '../../models/User';
import {getRepository} from "typeorm";

let getAllUsers = async function(request : Request, response : Response){
  const Users = getRepository(User);
  const userFindOptions = {
    relations : ["profile", "pets"]
  }
  const users = await Users.find(userFindOptions);

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

export default getAllUsers