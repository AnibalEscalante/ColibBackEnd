import { RequestC } from "../../models/requestC.model";
import contactController from "../contact/contact.controller";
import userController from "../user/user.controller";
import repository from "./requestC.repository";

function getRequestsC(): Promise<RequestC[]>{
  return repository.getRequestsC();
}

function getRequestC(id: string): Promise<RequestC | null>{
  return repository.getRequestC(id);
}

async function addRequestC(requestC: RequestC, idReceiver: string): Promise<RequestC | null>{
  
  const requestV = await repository.getVerifyRequestC(requestC.idUserSender, requestC.idProject);
  if (!requestV){
    const response = await repository.addRequestC(requestC);
    if (response) await userController.addRequestC(response._id!, idReceiver); 
    return response;
  }
  return null;
}

async function addRequestCReply(requestC: RequestC, idReceiver: string): Promise<RequestC>{
  const response = await repository.addRequestC(requestC);
  if (response) {
    await userController.addRequestCReply(response._id!, idReceiver, response.idProject);
  }
  return response;
}

async function addRequestCReplyRejected(requestC: RequestC, idReceiver: string): Promise<RequestC>{
  const response = await repository.addRequestC(requestC);
  if (response) {
    await userController.addRequestCReplyRejected(response._id!, idReceiver);
  }
  return response;
}


function updateRequestC(id: string, request: Partial<RequestC>): Promise<RequestC | null>{
  return repository.updateRequestC(id, request);
}

async function deleteRequestC(id: string, idUserSender: string): Promise<RequestC | null>{
  let user = await userController.getUser(idUserSender);
  if(user){
    await userController.removeRequestC(idUserSender, id)
  }
  return repository.deleteRequestC(id);
}

async function deleteRequestCReply(id: string, idUserSender: string): Promise<RequestC | null>{
  let user = await userController.getUser(idUserSender);
  if(user){
    await userController.removeRequestCReply(idUserSender, id)
  }
  return repository.deleteRequestC(id);
}


export default {
  addRequestC,
  getRequestsC,
  getRequestC,
  updateRequestC,
  deleteRequestC,
  addRequestCReply,
  deleteRequestCReply,
  addRequestCReplyRejected
};
