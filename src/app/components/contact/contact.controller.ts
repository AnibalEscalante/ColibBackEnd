import repository from "./contact.repository";
import { Contact } from '../../models/contact.model';
import messageController from "../message/message.controller";

function getContacts(): Promise<Contact[]>{
  return repository.getContacts();
}

function getContact(id: string): Promise<Contact | null>{
  return repository.getContact(id);
}

function getContactByIdUser(id: string): Promise<Contact | null>{
  return repository.getContactByIdUser(id);
}

async function addMessage(idMessage: string, idReceiver: string, idSender: string) {
  let contactSender = await repository.getContactByIdUser(idSender);
  let contactReceiver = await repository.getContactByIdUser(idReceiver);
  if (contactSender) {
    contactSender?.idSentMessages?.push(idMessage);
    repository.updateContactByIdUser(idSender, contactSender);
  } 
  if (contactReceiver) {
    contactReceiver?.idRecievedMessages?.push(idMessage);
    repository.updateContactByIdUser(idReceiver, contactReceiver);
  } 
  return;
}

async function addContact(newContact: Contact): Promise<Contact>{
  let contact = await repository.getContactByIdUser(newContact.idUser);
  if (!contact) {
    contact = await repository.addContact(newContact);
  }
  return contact!;
}

function updateContact(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return repository.updateContact(id, contact);
}

function updateContactByIdUser(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return repository.updateContactByIdUser(id, contact);
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
  getContactByIdUser,
  updateContact,
  updateContactByIdUser,
  addMessage,
  deleteContact,
  deleteContactByIdUser
};
