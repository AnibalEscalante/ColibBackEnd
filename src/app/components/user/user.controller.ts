import repository from "./user.repository";
import authController from "../auth/auth.controller";
import projectController from "../project/project.controller";
import collaboratorController from "../collaborator/collaborator.controller";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
import contactController from "../contact/contact.controller";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const auth: Auth | null = await authController.getAuthByAuthenticated(id);
  const result = {
    name: user?.name,
    lastName: user?.lastName,
    movilPhone: user?.movilPhone,
    idSkills: user?.idSkills,
    idDisciplines: user?.idDisciplines,
    email: auth?.email
  };
  return result;
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

async function getUserRequestsC(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const result = {
    idRequestsC: user?.idRequestsC
  };
  return result;
}

function addUser(user: User): Promise<User>{
  return repository.addUser(user);
}

async function updateUser(id: string, user: Partial<User & Auth>): Promise<User | null>{
  const updated = repository.updateUser(id, user as User);
  if (user.email) {
    await authController.updateEmail(id, user as Auth);
  }
  return updated;
}

async function changePassword(id: string, newPassword: string){
  return authController.changePassword(id, newPassword);
}

async function deleteUser(id: string){
  const user = await repository.getUser(id);
  await authController.deleteAuth(id);
  await collaboratorController.deleteCollaboratorByIdUser(id);
  await contactController.deleteContactByIdUser(id);
  const projects = await projectController.deleteMyProjects(user?.idMyProjects! as string[]);
  const userUpdated: User = {
    name: user?.name!,
    lastName: user?.lastName!,
    idMyProjects: projects!
  }
  await repository.updateUser(id, userUpdated);
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
  getUserRequestsC
};
