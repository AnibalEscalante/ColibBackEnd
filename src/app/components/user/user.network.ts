import express, { Request, Response, Router } from "express";
import { User } from '../../models/user.model';
import response from "../../modules/reponse.module";
import controller from "./user.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: User[] = await controller.getUsers();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: User | null = await controller.getUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/byEmail/:email/:password', async (req: Request, res: Response) => {
  const email: string = req.params['email'];
  const password: string = req.params['password'];

  try {
    const result: string | null = await controller.getUserByEmail(email, password);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/infoUser', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any | null = await controller.getInfoUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myProjects', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any | null = await controller.getUserProjects(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myRequestsC', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any | null = await controller.getUserRequestsC(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const user: Partial<User> = req.body;
  const id: string = req.params['id'];

  try {
    const result: User | null = await controller.updateUser(id, user);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id/password', async (req: Request, res: Response) => {
  const password: { newPassword: string } = req.body;
  const id: string = req.params['id'];

  try {
    await controller.changePassword(id, password.newPassword);
    response.success(req, res, 'Password has been updated', 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: User | null = await controller.deleteUser(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;