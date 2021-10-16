import repository from "./user.repository";
import authController from "../auth/auth.controller";
import projectController from "../project/project.controller";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";

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

function addUser(user: User): Promise<User>{
  return repository.addUser(user);
}

async function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  const updated = repository.updateUser(id, user);
  await authController.updateEmail(id, user);
  return updated;
}

async function changePassword(id: string, newPassword: string){
  return authController.changePassword(id, newPassword);
}

async function deleteUser(id: string): Promise<User | null>{
  const user: User | null = await repository.getUser(id);
  await authController.deleteAuth(id);
  await projectController.deleteMyProjects(user?.idMyProjects! as unknown as string[]);
  return repository.deleteUser(id);
}


export default { addUser, getUsers, getUser, updateUser, changePassword, deleteUser};
