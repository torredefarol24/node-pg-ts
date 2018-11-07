import getAllUsers from './getAll'
import createNewUser from './createNew'
import getUserById from './getById'
import patchUserById from './editById'
import deleteUserById from './deleteById'
import patchUserById_UserProfile from './patchById_Profile'
import createWithDummyPets from './createWithDummy_Pets';

let UserController = {
  getAll : getAllUsers,
  createUser : createNewUser,
  getSingleUser : getUserById,
  editUser : patchUserById,
  deleteUser : deleteUserById,
  editUserProfile : patchUserById_UserProfile,
  createWithDummyPets : createWithDummyPets
}

export default UserController