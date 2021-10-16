import { Project } from "../../models/project.model";
import { User } from "../../models/user.model";
import repository from "./project.repository";

function getProjects(): Promise<Project[] | null[]>{
  return repository.getProjects();
}

/* async function getProjects(): Promise<any[]>{
  const projects: Project[] | null[] = await repository.getProjects();
  for (let current of projects) {
    current.
  }
  const result = [{
    projects.
  }]; 
  return result;
} */

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

<<<<<<< HEAD
async function deleteMyProjects(id: string[]): Promise<Project[] | null> {
  let result: Project[] | null = [];
  for (let current of id) {
    const deleted = await deleteProject(current!);
=======
async function deleteMyProjects(id: string): Promise<Project | null>{
  const property: Project | null = await getProject(id);
  return repository.deleteProjects(id);
}

async function deleteProjects(id: string[]): Promise<Project[] | null> {
  let result: Project[] | null= [];
  for (let current of id) {
    const deleted = await deleteMyProjects(current!)
>>>>>>> 3c6ef845a77e3653324ab775cbfeb8575d6f9d44
    result.push(deleted!);
  }
  return result;
}

<<<<<<< HEAD
export default { addProject, getProjects, getProject, updateProject, deleteProject, deleteMyProjects};
=======
export default { addProject, getProjects, getProject, updateProject, deleteProject, deleteProjects};
>>>>>>> 3c6ef845a77e3653324ab775cbfeb8575d6f9d44
