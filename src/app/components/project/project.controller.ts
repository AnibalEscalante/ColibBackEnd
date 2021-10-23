import { Project } from "../../models/project.model";
import repository from "./project.repository";

function getProjects(): Promise<Project[] | null[]>{
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

async function deleteMyProjects(id: string): Promise<Project | null>{
  const property: Project | null = await getProject(id);
  return repository.deleteProjects(id);
}

async function deleteProjects(id: string[]): Promise<Project[] | null> {
  let result: Project[] | null= [];
  for (let current of id) {
    const deleted = await deleteMyProjects(current!)
    result.push(deleted!);
  }
  return result;
}

export default { addProject, getProjects, getProject, updateProject, deleteProject, deleteProjects};
