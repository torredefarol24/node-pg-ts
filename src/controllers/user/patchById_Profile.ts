import {Request, Response} from 'express';
import { User} from '../../models/User';
import { Profile } from '../../models/Profile';
import {getRepository} from "typeorm";

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

export default patchUserById_UserProfile