import { User } from '../../models/user.model';
import model from './user.schema';

async function getUsers(): Promise<User[]>{
  return model.find();
}

async function getUser(id: string): Promise<User | null>{
  return model.findOne({ _id: id });
}

async function getUserByNickName(nick: string): Promise<User | null>{
  return model.findOne({ nickName: nick });
}

async function addUser(user: User): Promise<User>{
  return model.create<User>(user);
}

async function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  return model.findOneAndUpdate({ _id: id }, user);
}

async function removeContact(id: string, idUser: string): Promise<User | null>{
  return model.findOneAndUpdate(
    { _id: id },
    {
      $pull: {
        idContacts: { idUser : idUser }
      }
    });
}

async function deleteUser(id: string): Promise<User | null>{
  return model.findOneAndRemove({_id: id});
}

export default {
  getUsers,
  getUser,
  getUserByNickName,
  addUser,
  updateUser,
  deleteUser,
  removeContact
};
