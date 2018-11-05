import {Request, Response} from 'express';
import {User} from '../models/User';
import {getRepository} from "typeorm";

let getAllUsers = async function(request : Request, response : Response){
  const Users = getRepository(User);
  const users = await Users.find();

  var context = {
    users : users
  }
  return response.status(200).json(context)
}


let UserController = {
  getAll : getAllUsers
}


export default UserController