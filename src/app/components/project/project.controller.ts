import repository from "./project.repository";
import { Project } from "src/app/models/project.model";

function getProjects(): Promise<Project[]>{
  return repository.getProjects();
}

function getProject(id: string): Promise<Project | null>{
  return repository.getProject(id);
}

function addProject(project: Project): Promise<Project>{
  return repository.addProject(project);
}

function updateProject(id: string, project: Partial<Project>): Promise<Project | null>{
  return repository.updateProject(id, project);
}

async function deleteProject(id: string): Promise<Project | null>{
  return repository.deleteProject(id);
}

export default { addProject, getProjects, getProject, updateProject, deleteProject};
