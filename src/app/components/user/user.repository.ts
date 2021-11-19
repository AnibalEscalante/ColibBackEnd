import { User } from '../../models/user.model';
import model from './user.schema';

async function getUsers(): Promise<User[]>{
  return model.find();
}

async function getUser(id: string): Promise<User | null>{
  return model.findOne({ _id: id });
}

async function getContactsUser(id: string): Promise<User | null>{
  return model.findOne({_id: id }).populate('idContacts','nickName idUser','Contact');
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

async function removeSavedProject(idUser: string, idProject: string): Promise<User | null>{
  return model.findOneAndUpdate(
    { _id: idUser },
    {
      $pull: {
        idSavedProjects: { _id : idProject }
      }
    });
}

async function removeCollaboratingProject(idUser: string, idProject: string): Promise<User | null>{
  return model.findOneAndUpdate(
    { _id: idUser },
    {
      $pull: {
        idCollaboratingProjects: { _id : idProject }
      }
    });
}

async function removeContact(id: string, idContactRemove: string): Promise<User | null>{
  return model.findOneAndUpdate(
    { _id: id },
    {
      $pull: {
        idContacts: { idUser : idContactRemove }
      }
    });
}

async function removeRequest(idUserSender: string, idRequest: string): Promise<User | null>{
  return model.findByIdAndUpdate(
    { _id: idUserSender },
    {
      $pull: {
        idRequestsC: { _id : idRequest }
      }
    });
}
async function removeRequestReply(idUserSender: string, idRequestReply: string): Promise<User | null>{
  return model.findByIdAndUpdate(
    { _id: idUserSender },
    {
      $pull: {
        idRequestResults: { _id : idRequestReply }
      }
    });
}

async function deleteUser(id: string): Promise<User | null>{
  return model.findOneAndRemove({_id: id});
}

export default {
  getUsers,
  getUser,
  getContactsUser,
  getUserByNickName,
  addUser,
  updateUser,
  deleteUser,
  removeSavedProject,
  removeCollaboratingProject,
  removeContact,
  removeRequest,
  removeRequestReply
};
