import { User } from "../../models/user.model";
import repository from "./user.repository";

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


export default { addUser, getUsers, getUser, updateUser};
