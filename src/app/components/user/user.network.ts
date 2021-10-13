import express, { Request, Response, Router } from "express";
import { Discipline } from "../../models/discipline.model";
import { User } from "../../models/user.model";
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

router.post('/', async (req: Request, res: Response) => {
  const user: User = req.body;
  
  try {
    const result: User = await controller.addUser(user);
    response.success(req, res, result, 201);
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