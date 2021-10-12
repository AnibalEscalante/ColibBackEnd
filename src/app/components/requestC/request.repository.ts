import { RequestC } from '../../models/request.model';
import model from './request.schema';

async function getRequests(): Promise<RequestC[]>{
  return model.find();
}

async function getRequest(id: string): Promise<RequestC | null>{
  return model.findOne({ _id: id });
}

async function addRequest(request: RequestC): Promise<RequestC>{
  return model.create<RequestC>(request);
}

async function updateRequest(id: string, request: Partial<RequestC>): Promise<RequestC | null>{
  return model.findOneAndUpdate({ _id: id }, request);
}

async function deleteRequest(id: string): Promise<RequestC | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getRequests, getRequest, addRequest, updateRequest, deleteRequest };
