import model from './user.schema';
import { User } from "src/app/models/user.model";

async function getUsers(): Promise<User[]>{
  return model.find();
}

async function getUser(id: string): Promise<User | null>{
  return model.findOne({ _id: id });
}

async function addUser(User: User): Promise<User>{
  return model.create<User>(User);
}

async function updateUser(id: string, User: Partial<User>): Promise<User | null>{
  return model.findOneAndUpdate({ _id: id }, User);
}

async function deleteUser(id: string): Promise<User | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getUsers, getUser, addUser, updateUser, deleteUser };
