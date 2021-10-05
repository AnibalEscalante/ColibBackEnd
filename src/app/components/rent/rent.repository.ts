import model from './rent.schema';
import { Rent } from "@models/rent.model";


async function getRents(): Promise<Rent[]>{
  return model.find();
}

async function getRent(id: string): Promise<Rent | null>{
  return model.findOne({ _id: id });
}

async function addRent(rent: Rent): Promise<Rent>{
  return model.create<Rent>(rent);
}

async function updateRent(id: string, rent: Partial<Rent>): Promise<Rent | null>{
  return model.findOneAndUpdate({ _id: id }, rent);
}

async function deleteRent(id: string): Promise<Rent | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getRents, getRent, addRent, updateRent, deleteRent };
