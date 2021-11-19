import express, { Request, Response, Router } from "express";
import { Server } from "socket.io";
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
  const requestC: RequestC = req.body as RequestC;
  const idReceiver: string = req.body.idReceiver;

  try {
    const result: RequestC | null = await controller.addRequestC(requestC,idReceiver);
    const io: Server = req.app.get('socket');
    io.emit(idReceiver, requestC);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/reply', async (req: Request, res: Response) => {
  const requestC: RequestC = req.body as RequestC;
  const idReceiver: string = req.body.idReceiver;

  try {
    const result: RequestC = await controller.addRequestCReply(requestC,idReceiver);
    const io: Server = req.app.get('socket');
    io.emit(idReceiver, requestC);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/reply/rejected', async (req: Request, res: Response) => {
  const requestC: RequestC = req.body as RequestC;
  const idReceiver: string = req.body.idReceiver;

  try {
    const result: RequestC = await controller.addRequestCReplyRejected(requestC,idReceiver);
    const io: Server = req.app.get('socket');
    io.emit(idReceiver, requestC);
    response.success(req, res, result);
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

router.delete('/:id/:idUserSender', async (req: Request, res: Response) => {
  const id: string = req.params['id'];
  const idUserSender: string = req.params['idUserSender'];

  try {
    const result: RequestC | null = await controller.deleteRequestC(id, idUserSender);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/reply/:id/:idUserSender', async (req: Request, res: Response) => {
  const id: string = req.params['id'];
  const idUserSender: string = req.params['idUserSender'];

  try {
    const result: RequestC | null = await controller.deleteRequestC(id, idUserSender);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;