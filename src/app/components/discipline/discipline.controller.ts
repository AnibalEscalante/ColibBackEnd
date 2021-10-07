import repository from "./discipline.repository";
import { Discipline } from "src/app/models/discipline.model";

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





export default { addDiscipline, getDisciplines, getDiscipline, updateDiscipline};
