import { Project } from '../../models/project.model';
import model from './project.schema';

async function getProjects(): Promise<Project[]>{
  return model.find();
}

async function getProject(id: string): Promise<Project | null>{
  return model.findOne({ _id: id });
}

async function addProject(project: Project): Promise<Project>{
  return model.create<Project>(project);
}

async function updateProject(id: string, project: Partial<Project>): Promise<Project | null>{
  return model.findOneAndUpdate({ _id: id }, project);
}

async function deleteProject(id: string): Promise<Project | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteProjects(id: string): Promise<Project | null>{
  return model.findOneAndRemove({_id: id});
}

export default {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
  deleteProjects
};
