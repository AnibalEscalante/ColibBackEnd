import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
import authModule from "../../modules/auth.module";
import userController from "../user/user.controller";
import repository from "./auth.repository";
import { Collaborator } from '../../models/collaborator.model';
import collaboratorController from "../collaborator/collaborator.controller";

async function userSignIn(auth: Auth & User): Promise<Auth>{
  try {
    let newUser: User = auth as User;
    /* find email */
    let registerUser: Auth | null = await repository.getAuthByEmail(auth.email);
    if(registerUser == null){
      newUser = await userController.addUser(newUser);
    }
      if(newUser._id && auth.password){
        auth.authenticated = newUser?._id;
        auth.password = await authModule.encrypt(auth.password);
        let authentify: Auth = {
          email: auth.email,
          password: auth.password,
          authenticated: auth.authenticated 
  
        }
        let newCollaborator: Collaborator = {
          name: newUser.name,
          lastName: newUser.lastName,
          idUser: newUser._id
        }
        collaboratorController.addCollaborator(newCollaborator);
        return repository.addAuth(authentify);
      }
    
  }
  catch(error){
    return Promise.reject();
  }
  return Promise.reject();
}

async function login(auth: Auth): Promise<string | null>{
  if(auth.email && auth.password){
    
    try {
      const authFound = await getAuthByEmail(auth);
  
      if(authFound && authFound.password){
        if(!(await authModule.decryptAndCompare(auth.password, authFound.password))){
          return Promise.reject();
        }
    
        const { email, entity, authenticated }: any = authFound;
        
        authFound.token = authModule.sign({ 
          email: email, 
          entity: entity, 
          authenticated: authenticated._id
        });


        console.log(authModule.verify(authFound.token))
        return authFound.token;
      }
    }
    catch (error) {
      return Promise.reject();
    }
  }

  return Promise.reject();
}

async function getAuthByEmail(auth: Auth): Promise<Auth | null>{
  return repository.getAuthByEmail(auth.email);
}

async function getAuthByAuthenticated(authenticated: string): Promise<Auth | null> {
  return repository.getAuthByAuthenticated(authenticated);
}

async function updateEmail(id: string, user: any): Promise<Auth | null>{
  return repository.updateEmail(id, user);
}

async function changePassword(id: string, newPassword: string){
  newPassword = await authModule.encrypt(newPassword);
  return repository.changePassword(id, newPassword);
}

async function deleteAuth(id: string){
  return repository.deleteAuth(id);
}

export default {
  userSignIn,
  login, getAuthByEmail,
  getAuthByAuthenticated,
  updateEmail,
  changePassword,
  deleteAuth
};
