import {Request, Response} from 'express';
import { User} from '../../models/User';
import {getRepository} from "typeorm";

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

export default deleteUserById