import repository from "./contact.repository";
import { Contact } from '../../models/contact.model';
import messageController from "../message/message.controller";
import userController from "../user/user.controller";
import { User } from '../../models/user.model';

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

async function addContact(newContact: Contact, idUser: string): Promise<Contact>{
  let contact: Contact = await repository.addContact(newContact);
  let user: User | null = await userController.getOnlyUser(idUser);
  if (user && contact) {
    user.idContacts?.push(contact._id!);
    await userController.updateUser(idUser, user);
  }
  return contact;
}

function updateContact(id: string, contact: Partial<Contact>): Promise<Contact | null>{
  return repository.updateContact(id, contact);
}

async function updateContactByIdUser(id: string, contact: Partial<Contact>) {
  let contacts = await repository.getContactsByIdUser(id);
  for (let current of contacts) {
    if (current._id) await repository.updateContact(current._id, contact);
  }
  return;
}

async function deleteContact(id: string, idUser: string) {
  let user: User | null = await userController.getOnlyUser(idUser);
  if (user) {
    await userController.removeContactInUser(idUser, id);
  }
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
