import { Project } from "../../models/project.model";
import userController from "../user/user.controller";
import repository from "./project.repository";

function getProjects(): Promise<Project[] | null[]>{
  return repository.getProjects();
}

function getProject(id: string): Promise<Project | null>{
  return repository.getProject(id);
}

async function addProject(idUser: string, project: Project & string): Promise<Project>{
  const response = await repository.addProject(project);
  await userController.addProjectUser(idUser, project);
  return response;
}

function updateProject(id: string, project: Partial<Project>): Promise<Project | null>{
  return repository.updateProject(id, project);
}

async function deleteProject(id: string): Promise<Project | null>{
  const users = await userController.getUsers();
  for (let user of users) {
    await userController.removeSavedProject(user._id!, id);
    await userController.removeCollaboratingProject(user._id!, id);
  }
  return repository.deleteProject(id);
}

async function removeCollaborator(idProject: string, id: string): Promise<Project | null>{
  return repository.removeCollaborator(idProject, id);
}

async function deleteMyProjects(ids: string[]): Promise<Project[] | null> {
  let result: Project[] | null= [];
  for (let current of ids) {
    const deleted = await deleteProject(current!)
    result.push(deleted!);
  }
  return result;
}

export default {
  addProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  removeCollaborator,
  deleteMyProjects
};
