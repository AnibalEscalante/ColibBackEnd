import { User } from '../../models/user.model';
import model from './user.schema';


async function getUsers(): Promise<User[]>{
  return model.find();
}

async function getUser(id: string): Promise<User | null>{
  return model.findOne({ _id: id });
}

async function addUser(user: User): Promise<User>{
  return model.create<User>(user);
}

async function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  return model.findOneAndUpdate({ _id: id }, user);
}


export default { getUsers, getUser, addUser, updateUser};
