import model from './contact.schema';
import { Contact } from '../../models/contact.model';

async function getContacts(): Promise<Contact[]>{
  return model.find();
}

async function getContact(id: string): Promise<Contact | null>{
  return model.findOne({ _id: id });
}

async function getContactByIdUser(id: string): Promise<Contact | null>{
  return model.findOne({ idUser: id });
}

async function getMyContacts(id: string): Promise<Contact[]>{
  return model.find({ idUser: id });
}

async function addContact(contact: Contact): Promise<Contact>{
  return model.create<Contact>(contact);
}

async function updateContact(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return model.findOneAndUpdate({ _id: id }, contact);
}

async function updateContactByIdUser(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return model.findOneAndUpdate({ idUser: id }, contact);
}

async function deleteContact(id: string): Promise<Contact | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteContactByIdUser(id: string): Promise<Contact | null>{
  return model.findOneAndRemove({idUser: id});
}

export default {
  getContacts,
  getContact,
  addContact,
  updateContact,
  updateContactByIdUser,
  deleteContact,
  getContactByIdUser,
  getMyContacts,
  deleteContactByIdUser
};
