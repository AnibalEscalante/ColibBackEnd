import repository from "./skill.repository";
import { Skill } from "src/app/models/skill.model";

function getSkills(): Promise<Skill[]>{
  return repository.getSkills();
}

function getSkill(id: string): Promise<Skill | null>{
  return repository.getSkill(id);
}

function addSkill(skill: Skill): Promise<Skill>{
  return repository.addSkill(skill);
}

function updateSkill(id: string, skill: Partial<Skill>): Promise<Skill | null>{
  return repository.updateSkill(id, skill);
}





export default { addSkill, getSkills, getSkill, updateSkill};
