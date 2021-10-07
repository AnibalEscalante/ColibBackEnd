import express, { Request, Response, Router } from "express";
import { Discipline } from "src/app/models/discipline.model";
import response from "../../modules/reponse.module";
import controller from "./discipline.controller";



const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Discipline[] = await controller.getDisciplines();
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
    const result: Discipline | null = await controller.getDiscipline(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const discipline: Discipline = req.body;
  
  try {
    const result: Discipline = await controller.addDiscipline(discipline);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const discipline: Partial<Discipline> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Discipline | null = await controller.updateDiscipline(id, discipline);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;