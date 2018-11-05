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


let createNewUser = async function(request: Request, response : Response){
  const Users = getRepository(User);
  
  const user = {
    firstName : request.body.firstName.trim(),
    lastName : request.body.lastName.trim(),
    email : request.body.email.trim()
  }

  await Users.save(user);
  return response.status(201).json(user)
}


let getUserById = async function (request : Request, response : Response){
  const Users = getRepository(User);
  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();

  if (user) {
    var context = {
      user : user
    }
    return response.status(200).json(context)
  } else {
    return response.status(404).json({ msg : "User Not Found"})
  }


}


let patchUserById = async function(request : Request, response : Response){
  const Users = getRepository(User);
  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();

  if (user){
    await Users.createQueryBuilder().update(User)
    .set({ firstName: request.body.firstName, lastName: request.body.lastName })
    .where("id = :id", { id: request.params.id }).execute();

    return response.status(200).json({ msg : "User Updated", user : user });
  } else {
    return response.status(404).json({ msg : "User Not Found"})
  }
}


let deleteUserById = async function(request: Request, response : Response){
  const Users = getRepository(User);

  const user = await Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();

  if (user){
    await Users.createQueryBuilder().delete().from(User).where("id = :id", { id: request.params.id }).execute();

    return response.status(200).json({ msg : "User Deleted" });  
  } else {
    return response.status(404).json({ msg : "User Not Found"})
  }
  
}

let UserController = {
  getAll : getAllUsers,
  createUser : createNewUser,
  getSingleUser : getUserById,
  editUser : patchUserById
}


export default UserController