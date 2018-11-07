import getAll from './getAll'
import getById from './getById';
import editById from './editById';
import createNew from './createNew';
import deleteById from './deleteById';
import createPetsDummyTalents from './createDummyPetTalents';

let TalentController = {
  getAllTalents : getAll,
  getSingleTalent : getById,
  editTalent : editById,
  createNewTalent : createNew,
  deleteTalent : deleteById,
  createPetsWithDummyTalents : createPetsDummyTalents
}

export default TalentController