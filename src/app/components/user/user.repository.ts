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

async function removeContact(idUser: string, idContact: string): Promise<User | null>{
  return model.findOneAndUpdate(
    { _id: idUser },
    {
      $pull: {
        idContacts: { idUser : idContact }
      }
    });
}

async function deleteUser(id: string): Promise<User | null>{
  return model.findOneAndRemove({_id: id});
}

export default {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  removeContact
};
