import express, { Request, Response, Router } from "express";
import { Collaborator } from "../../models/collaborator.model";
import response from "../../modules/reponse.module";
import controller from "./collaborator.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Collaborator[] = await controller.getCollaborators();
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
    const result: Collaborator | null = await controller.getCollaborator(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('userBy/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Collaborator | null = await controller.getCollaboratorByIdUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const collaborator: Partial<Collaborator> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Collaborator | null = await controller.updateCollaborator(id, collaborator);
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
    const result: Collaborator | null = await controller.deleteCollaborator(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;