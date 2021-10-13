import { Discipline } from "../../models/discipline.model";
import { User } from "../../models/user.model";
import repository from "./user.repository";
import disciplineController from "../discipline/discipline.controller";
import projectController from "../project/project.controller";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

function getUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

function addUser(user: User): Promise<User>{
  return repository.addUser(user);
}

function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  return repository.updateUser(id, user);
}

async function deleteUser(id: string){
  const user: User | null = await repository.getUser(id)
  await projectController.deleteProjects(user?.idMyProjects! as string[]);
  return repository.deleteUser(id);
}


export default { addUser, getUsers, getUser, updateUser, deleteUser};
