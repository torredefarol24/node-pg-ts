import {User} from '../models/User';
import {Pet} from '../models/Pet';
import {Profile} from '../models/Profile';
import {Talent} from '../models/Talent';
import AppKeys from '../keys/appKeys';

let DBVars = {
  type: AppKeys.DB_TYPE,
  host: AppKeys.DB_HOST,
  port: AppKeys.DB_PORT,
  username: AppKeys.DB_USERNAME,
  password: AppKeys.DB_PASSWORD,
  database: AppKeys.DB_NAME,
  entities : [User, Pet, Profile, Talent]
}

export default DBVars