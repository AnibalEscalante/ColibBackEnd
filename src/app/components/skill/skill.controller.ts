import { Skill } from "../../models/skill.model";
import repository from "./skill.repository";

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

async function deleteSkill(id: string): Promise<Skill | null>{
  return repository.deleteSkill(id);
}

async function deleteAllSkills(): Promise<Skill[]>{
  return repository.deleteAllSkills();
}

export default {
  addSkill,
  getSkills,
  getSkill,
  updateSkill,
  deleteSkill,
  deleteAllSkills
};
