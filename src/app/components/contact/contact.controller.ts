import repository from "./contact.repository";
import { Contact } from '../../models/contact.model';
import messageController from "../message/message.controller";

function getContacts(): Promise<Contact[]>{
  return repository.getContacts();
}

function getContact(id: string): Promise<Contact | null>{
  return repository.getContact(id);
}

async function getContactByIdUser(id: string): Promise<Contact[] | null>{
  const contactList: Contact[] = await repository.getMyContacts(id);
  let response: Contact[] = [];
  for (let current of contactList) {
    const contact: Contact= {
      name: current.name,
      lastName: current.lastName,
      idUser: current.idUser
    }

    response.push(contact);
  }
  return response;
}

function getMyContacts(id: string): Promise<Contact[]>{
  return repository.getMyContacts(id);
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

async function deleteContactByIdUser(id: string) {
  const contact = await repository.getContact(id);
  await messageController.deleteMessages(contact?.idSentMessages! as string[], contact?.idRecievedMessages! as string[]);
  await repository.deleteContactByIdUser(id);
  return;
}

export default {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  getContactByIdUser,
  getMyContacts,
  deleteContactByIdUser
};
