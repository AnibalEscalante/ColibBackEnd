import repository from "./user.repository";
import authController from "../auth/auth.controller";
import projectController from "../project/project.controller";
import collaboratorController from "../collaborator/collaborator.controller";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
import contactController from "../contact/contact.controller";
import { Collaborator } from '../../models/collaborator.model';
import { Contact } from '../../models/contact.model';
import { Project } from "../../models/project.model";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const auth: Auth | null = await authController.getAuthByAuthenticated(id);
  const result = {
    nickName: user?.nickName,
    name: user?.name,
    lastName: user?.lastName,
    movilPhone: user?.movilPhone,
    idSkills: user?.idSkills,
    idDisciplines: user?.idDisciplines,
    email: auth?.email
  };
  return result;
}

async function addProjectUser(id:string, project: Project & string){
  const user = await repository.getUser(id);
  user?.idMyProjects?.push(project);
  await repository.updateUser(id, user!);
  return;
}

async function getUserProjects(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idMyProjects: user?.idMyProjects
  };
  return result;
}

async function getUserSavedProjects(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idSavedProjects: user?.idSavedProjects
  };
  return result;
}

async function getUserCollabProjects(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idCollaboratingProjects: user?.idCollaboratingProjects
  };
  return result;
}

async function getUserContacts(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idContacts: user?.idContacts
  };
  return result;
}

async function getUserRequestsC(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idRequestsC: user?.idRequestsC
  };
  return result;
}

async function addUser(newUser: User): Promise<User | null> {
  const user = await repository.getUserByNickName(newUser.nickName);
  if (user == null) {
    return repository.addUser(newUser);
  }
  return null;
}

async function updateUser(id: string, user: Partial<User & Auth>): Promise<User | null>{
  const response = await repository.updateUser(id, user as User);
  if (user.email) {
    await authController.updateEmail(id, user as Auth);
  }
  const updated: Partial<Collaborator & Contact> = {
    idUser: id,
    nickName: user.nickName!
  }
  await collaboratorController.updateCollaboratorByIdUser(id, updated as Collaborator);
  await contactController.updateContactByIdUser(id, updated as Contact);
  return response;
}

async function changePassword(id: string, newPassword: string){
  return authController.changePassword(id, newPassword);
}

async function removeSavedProject(idUser: string, idProject: string) {
  return repository.removeSavedProject(idUser, idProject);
}

async function removeCollaboratingProject(idUser: string, idProject: string) {
  return repository.removeCollaboratingProject(idUser, idProject);
}

async function removeContactInUsers(id: string) {
  const users = await repository.getUsers();
  for (let user of users) {
    await repository.removeContact(user._id!, id);
  }
  return;
}

async function removeCollaboratorInProjects(id: string) {
  const projects = await projectController.getProjects();
  for (let project of projects) {
    await projectController.removeCollaborator(project?._id!, id);
  }
  return;
}

async function deleteUser(id: string){
  const user = await repository.getUser(id);
  await authController.deleteAuth(id);
  await removeCollaboratorInProjects(id);
  await collaboratorController.deleteCollaboratorByIdUser(id);
  await removeContactInUsers(id);
  await contactController.deleteContactByIdUser(id);
  await projectController.deleteMyProjects(user?.idMyProjects! as string[]);
  return repository.deleteUser(id);
}

export default {
  addUser,
  getUsers,
  getUser,
  updateUser,
  changePassword,
  deleteUser,
  getUserProjects,
  getUserSavedProjects,
  getUserCollabProjects,
  removeSavedProject,
  removeCollaboratingProject,
  removeContactInUsers,
  removeCollaboratorInProjects,
  getUserRequestsC,
  getUserContacts,
  addProjectUser
};
