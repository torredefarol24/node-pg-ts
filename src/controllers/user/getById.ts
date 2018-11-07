import {Request, Response} from 'express';
import { User} from '../../models/User';
import {getRepository} from "typeorm";

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

export default getUserById