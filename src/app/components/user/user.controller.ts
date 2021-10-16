import repository from "./user.repository";
<<<<<<< HEAD
import authController from "../auth/auth.controller";
import projectController from "../project/project.controller";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
=======
import disciplineController from "../discipline/discipline.controller";
import projectController from "../project/project.controller";
>>>>>>> 3c6ef845a77e3653324ab775cbfeb8575d6f9d44

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

<<<<<<< HEAD
async function deleteUser(id: string): Promise<User | null>{
  const user: User | null = await repository.getUser(id);
  await authController.deleteAuth(id);
  await projectController.deleteMyProjects(user?.idMyProjects! as unknown as string[]);
=======
async function deleteUser(id: string){
  const user: User | null = await repository.getUser(id)
  await projectController.deleteProjects(user?.idMyProjects! as string[]);
>>>>>>> 3c6ef845a77e3653324ab775cbfeb8575d6f9d44
  return repository.deleteUser(id);
}


export default { addUser, getUsers, getUser, updateUser, changePassword, deleteUser};
