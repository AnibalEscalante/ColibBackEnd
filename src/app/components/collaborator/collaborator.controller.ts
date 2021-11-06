import repository from "./collaborator.repository";
import { Collaborator } from '../../models/collaborator.model';

function getCollaborators(): Promise<Collaborator[]>{
  return repository.getCollaborators();
}

function getCollaborator(id: string): Promise<Collaborator | null>{
  return repository.getCollaborator(id);
}

function getCollaboratorByIdUser(id: string): Promise<Collaborator | null>{
  return repository.getCollaboratorByIdUser(id);
}

function addCollaborator(collaborator: Collaborator): Promise<Collaborator>{
  return repository.addCollaborator(collaborator);
}

function updateCollaborator(id: string, collaborator: Partial<Collaborator>): Promise<Collaborator | null>{
  return repository.updateCollaborator(id, collaborator);
}

function updateCollaboratorByIdUser(id: string, data: Collaborator) {
  return repository.updateCollaboratorByIdUser(id, data);
}

function deleteCollaborator(id: string){
  return repository.deleteCollaborator(id);
}

function deleteCollaboratorByIdUser(id: string){
  return repository.deleteCollaboratorByIdUser(id);
}

export default {
  addCollaborator,
  getCollaborators,
  getCollaborator,
  updateCollaborator,
  updateCollaboratorByIdUser,
  deleteCollaborator,
  getCollaboratorByIdUser,
  deleteCollaboratorByIdUser
};
