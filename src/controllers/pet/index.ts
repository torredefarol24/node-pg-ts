import getAll from './getAll';
import getById from './getById';
import createNew from './createNew';
import editById from './editById';
import deleteById from './deleteById';
import createWithStaticUser from './createNewWithUser';

let PetController = {
  getAllPets : getAll,
  getSinglePet : getById,
  editSinglePet : editById,
  createNewPet : createNew,
  deleteSinglePet : deleteById,
  createWithStaticUser : createWithStaticUser
}

export default PetController