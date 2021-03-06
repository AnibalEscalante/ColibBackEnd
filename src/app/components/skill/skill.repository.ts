import { Skill } from '../../models/skill.model';
import model from './skill.schema';

async function getSkills(): Promise<Skill[]>{
  return model.find();
}

async function getSkill(id: string): Promise<Skill | null>{
  return model.findOne({ _id: id });
}

async function addSkill(skill: Skill): Promise<Skill>{
  return model.create<Skill>(skill);
}

async function updateSkill(id: string, skill: Partial<Skill>): Promise<Skill | null>{
  return model.findOneAndUpdate({ _id: id }, skill);
}

async function deleteSkill(id: string): Promise<Skill | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteAllSkills(): Promise<Skill[]>{
  return model.deleteMany();
}

export default {
  getSkills,
  getSkill,
  addSkill,
  updateSkill,
  deleteSkill,
  deleteAllSkills
};
