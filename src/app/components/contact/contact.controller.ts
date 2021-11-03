import repository from "./contact.repository";
import { Contact } from '../../models/contact.model';

function getContacts(): Promise<Contact[]>{
  return repository.getContacts();
}

function getContact(id: string): Promise<Contact | null>{
  return repository.getContact(id);
}

function getContactByIdUser(id: string): Promise<Contact | null>{
  return repository.getContactByIdUser(id);
}

async function addContact(newContact: Contact): Promise<Contact>{
  let contact = await repository.getContactByIdUser(newContact._id!);
  if (!contact) {
    contact = await repository.addContact(newContact);
  }
  return contact!;
}

function updateContact(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return repository.updateContact(id, contact);
}

function deleteContact(id: string){
  return repository.deleteContact(id);
}

function deleteContactByIdUser(id: string){
  return repository.deleteContactByIdUser(id);
}

export default {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  getContactByIdUser,
  deleteContactByIdUser
};
