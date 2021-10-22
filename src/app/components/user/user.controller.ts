import repository from "./user.repository";
import projectController from "../project/project.controller";
import { User } from "../../models/user.model";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

async function getUserByEmail(email: string, password: string): Promise<string | null>{
  const result = await repository.getUserByEmail(email);
  if(password === result?.password){
    return result?._id!;
  }
  return null;
}

async function getInfoUser(id: string): Promise<any | null>{
  const user = await repository.getUser(id);
  const response ={
    name: user?.name,
    lastName: user?.lastName,
    email: user?.email,
    idDisciplines: user?.idDisciplines,
    idSkills: user?.idSkills
  }
  return response;
}

async function getUserProjects(id: string): Promise<any | null>{
  const user = await repository.getUser(id);
  const response ={
    idMyProjects: user?.idMyProjects,
  }
  return response;
}

async function getUserSavedProjects(id: string): Promise<any | null>{
  const user = await repository.getUser(id);
  const response ={
    idSavedProjects: user?.idSavedProjects,
  }
  return response;
}

async function getUserRequestsC(id: string): Promise<any | null>{
  const user = await repository.getUser(id);
  const response ={
    idRequestsC: user?.idRequestsC,
  }
  return response;
}

function addUser(user: User): Promise<User>{
  return repository.addUser(user);
}

async function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  return repository.updateUser(id, user);
}

async function changePassword(id: string, newPassword: string){
  return repository.changePassword(id, newPassword);
}

async function deleteUser(id: string){
  const user: User | null = await repository.getUser(id);
  await projectController.deleteProjects(user?.idMyProjects! as string[]);
  return repository.deleteUser(id);
}


export default {
  addUser,
  getUsers,
  getUser,
  updateUser,
  changePassword,
  deleteUser,
  getUserByEmail,
  getInfoUser,
  getUserProjects,
  getUserSavedProjects,
  getUserRequestsC
};
