import { Discipline } from "../../models/discipline.model";
import repository from "./discipline.repository";

function getDisciplines(): Promise<Discipline[]>{
  return repository.getDisciplines();
}

function getDiscipline(id: string): Promise<Discipline | null>{
  return repository.getDiscipline(id);
}

function addDiscipline(discipline: Discipline): Promise<Discipline>{
  return repository.addDiscipline(discipline);
}

function updateDiscipline(id: string, discipline: Partial<Discipline>): Promise<Discipline | null>{
  return repository.updateDiscipline(id, discipline);
}

async function deleteDiscipline(id: string): Promise<Discipline | null>{
  return repository.deleteDiscipline(id);
}

async function deleteAllDisciplines(): Promise<Discipline[]>{
  return repository.deleteAllDisciplines();
}

export default {
  addDiscipline,
  getDisciplines,
  getDiscipline,
  updateDiscipline,
  deleteDiscipline,
  deleteAllDisciplines
};
