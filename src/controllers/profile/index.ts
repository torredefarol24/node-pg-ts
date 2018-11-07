import getAllProfiles from './getAll';
import createProfile from './createNew';
import getProfileById from './getById'
import editProfileById from './editById';
import deleteProfileById from './deleteById';

let profileController = {
  getAll : getAllProfiles,
  createNewProfile : createProfile,
  getSingleProfile : getProfileById,
  editProfile : editProfileById,
  deleteProfile : deleteProfileById
}

export default profileController