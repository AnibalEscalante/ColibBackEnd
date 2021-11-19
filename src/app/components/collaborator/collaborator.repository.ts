import model from './collaborator.schema';
import { Collaborator } from '../../models/collaborator.model';

async function getCollaborators(): Promise<Collaborator[]>{
  return model.find();
}

async function getCollaborator(id: string): Promise<Collaborator | null>{
  return model.findOne({ _id: id });
}

async function getCollaboratorByIdUser(id: string): Promise<Collaborator | null>{
  return model.findOne({ idUser: id });
}

async function addCollaborator(collaborator: Collaborator): Promise<Collaborator>{
  return model.create<Collaborator>(collaborator);
}

async function updateCollaborator(id: string, collaborator: Partial<Collaborator>): Promise<Collaborator | null>{
  return model.findOneAndUpdate({ _id: id }, collaborator);
}

async function updateCollaboratorByIdUser(id: string, collaborator: Collaborator) {
  return model.findOneAndUpdate({ idUser: id }, collaborator);
}

async function deleteCollaborator(id: string): Promise<Collaborator | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteCollaboratorByIdUser(id: string): Promise<Collaborator | null>{
  return model.findOneAndRemove({idUser: id});
}

export default {
  getCollaborators,
  getCollaborator,
  addCollaborator,
  updateCollaborator,
  updateCollaboratorByIdUser,
  deleteCollaborator,
  getCollaboratorByIdUser,
  deleteCollaboratorByIdUser
};
