import { RequestC } from "../../models/requestC.model";
import repository from "./requestC.repository";

function getRequestsC(): Promise<RequestC[]>{
  return repository.getRequestsC();
}

function getRequestC(id: string): Promise<RequestC | null>{
  return repository.getRequestC(id);
}

function addRequestC(request: RequestC): Promise<RequestC>{
  return repository.addRequestC(request);
}

function updateRequestC(id: string, request: Partial<RequestC>): Promise<RequestC | null>{
  return repository.updateRequestC(id, request);
}

async function deleteRequestC(id: string): Promise<RequestC | null>{
  return repository.deleteRequestC(id);
}

export default { addRequestC, getRequestsC, getRequestC, updateRequestC, deleteRequestC};
