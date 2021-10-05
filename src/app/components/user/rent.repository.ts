import model from './user.schema';
import { User } from "src/app/models/user.model";

async function getRents(): Promise<User[]>{
  return model.find();
}

async function getRent(id: string): Promise<User | null>{
  return model.findOne({ _id: id });
}

async function addRent(User: User): Promise<User>{
  return model.create<User>(User);
}

async function updateRent(id: string, User: Partial<User>): Promise<User | null>{
  return model.findOneAndUpdate({ _id: id }, User);
}

async function deleteRent(id: string): Promise<User | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getRents, getRent, addRent, updateRent, deleteRent };
