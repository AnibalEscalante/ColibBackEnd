import express, { Request, Response, Router } from "express";
import { RequestC } from "../../models/requestC.model";
import response from "../../modules/reponse.module";
import controller from "./requestC.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: RequestC[] = await controller.getRequestsC();
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
    const result: RequestC | null = await controller.getRequestC(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const requestC: RequestC = req.body;
  
  try {
    const result: RequestC = await controller.addRequestC(requestC);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const requestC: Partial<RequestC> = req.body;
  const id: string = req.params['id'];

  try {
    const result: RequestC | null = await controller.updateRequestC(id, requestC);
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
    const result: RequestC | null = await controller.deleteRequestC(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;