import repository from "./user.repository";
import projectController from "../project/project.controller";
import { User } from "../../models/user.model";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

async function getUserByEmail(email: string): Promise<User | null>{
  return repository.getUserByEmail(email);
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


export default { addUser, getUsers, getUser, updateUser, changePassword, deleteUser, getUserByEmail};
