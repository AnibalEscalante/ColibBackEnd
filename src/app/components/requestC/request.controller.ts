import repository from "./request.repository";
import { RequestC } from "src/app/models/request.model";

function getRequests(): Promise<RequestC[]>{
  return repository.getRequests();
}

function getRequest(id: string): Promise<RequestC | null>{
  return repository.getRequest(id);
}

function addRequest(request: RequestC): Promise<RequestC>{
  return repository.addRequest(request);
}

function updateRequest(id: string, request: Partial<RequestC>): Promise<RequestC | null>{
  return repository.updateRequest(id, request);
}

async function deleteRequest(id: string): Promise<RequestC | null>{
  return repository.deleteRequest(id);
}

export default { addRequest, getRequests, getRequest, updateRequest, deleteRequest};
