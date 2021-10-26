import { Discipline } from '../../models/discipline.model';
import model from './discipline.schema';

async function getDisciplines(): Promise<Discipline[]>{
  return model.find();
}

async function getDiscipline(id: string): Promise<Discipline | null>{
  return model.findOne({ _id: id });
}

async function addDiscipline(discipline: Discipline): Promise<Discipline>{
  return model.create<Discipline>(discipline);
}

async function updateDiscipline(id: string, discipline: Partial<Discipline>): Promise<Discipline | null>{
  return model.findOneAndUpdate({ _id: id }, discipline);
}

async function deleteDiscipline(id: string): Promise<Discipline | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteAllDisciplines(): Promise<Discipline[]>{
  return model.deleteMany();
}

export default {
  getDisciplines,
  getDiscipline,
  addDiscipline,
  updateDiscipline,
  deleteDiscipline,
  deleteAllDisciplines
};
