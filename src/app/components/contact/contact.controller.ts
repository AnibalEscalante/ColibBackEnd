import repository from "./contact.repository";
import { Contact } from '../../models/contact.model';
import messageController from "../message/message.controller";

function getContacts(): Promise<Contact[]>{
  return repository.getContacts();
}

function getContact(id: string): Promise<Contact | null>{
  return repository.getContact(id);
}

async function addMessage(idMessage: string, idSender: string, idReceiver: string) {
  let contactSender = await repository.getContact(idSender);
  let contactReceiver = await repository.getContact(idReceiver);
  /* if (contactSender) contactSender?.idSentMessages?.push(idMessage);
  if (contactReceiver) contactReceiver?.idRecievedMessages?.push(idMessage); */
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
  updateContact,
  updateContactByIdUser,
  addMessage,
  deleteContact,
  deleteContactByIdUser
};
