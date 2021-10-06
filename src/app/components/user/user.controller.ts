import repository from "./user.repository";
import { User } from "src/app/models/user.model";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

function getUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

function addUser(rent: User): Promise<User>{
  return repository.addUser(rent);
}

/* async function addUserUser(rent: User, id: string): Promise<User>{
  const result = await repository.addUser(rent);
  await userController.updateUser(id, result._id!);
  return result;
} */

function updateUser(id: string, rent: Partial<User>): Promise<User | null>{
  return repository.updateUser(id, rent);
}

/* async function deleteUser(id: string): Promise<User | null>{
  const rent: User | null = await getUser(id);
  await codeController.deleteCode(rent?.code!);
  await contractController.deleteContract(rent?.contract as string);
  return repository.deleteUser(id);
}

async function deleteUsers(id: string[]): Promise<User[] | null>{
  let result: User[] | null= [];
  for (let current of id) {
    const deleted = await deleteUser(current!)
    result.push(deleted!);
  }
  return result;
} */

export default { addUser, getUsers, getUser, updateUser};
