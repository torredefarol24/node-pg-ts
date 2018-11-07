import {Request, Response} from 'express';
import { User} from '../../models/User';
import {getRepository} from "typeorm";

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

  if (!request.body.firstName || !request.body.lastName || !request.body.address){
    context.message = " Request Body Keys missing";
    context.success = false;
    return response.status(404).json(context);
  }

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();

  if (user){

    let userParams : any = {
      firstName: request.body.firstName.trim(),
      lastName: request.body.lastName.trim(),
      address : request.body.address.trim()
    }

    await Users.createQueryBuilder().update(User)
    .set(userParams)
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

export default patchUserById