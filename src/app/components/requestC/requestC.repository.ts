import { RequestC } from '../../models/requestC.model';
import model from './requestC.schema';

async function getRequestsC(): Promise<RequestC[]>{
  return model.find();
}

async function getRequestC(id: string): Promise<RequestC | null>{
  return model.findOne({ _id: id });
}

async function addRequestC(requestC: RequestC): Promise<RequestC>{
  return model.create<RequestC>(requestC);
}

async function updateRequestC(id: string, requestC: Partial<RequestC>): Promise<RequestC | null>{
  return model.findOneAndUpdate({ _id: id }, requestC);
}

async function deleteRequestC(id: string): Promise<RequestC | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getRequestsC, getRequestC, addRequestC, updateRequestC, deleteRequestC };
