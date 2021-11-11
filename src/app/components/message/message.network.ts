import express, { Request, Response, Router } from "express";
import { Message } from '../../models/message.model';
import response from "../../modules/reponse.module";
import controller from "./message.controller";
import { Server } from "socket.io";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Message[] = await controller.getMessages();
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
    const result: Message | null = await controller.getMessage(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const message: Message = req.body as Message;
  const idReceiver: string = req.body.idReceiver;
  const idSender: string = req.body.idSender;

  try {
    const result: Message = await controller.addMessage(message,idReceiver,idSender);
    const io: Server = req.app.get('socket');
    io.emit(idReceiver, message);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const message: Partial<Message> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Message | null = await controller.updateMessage(id, message);
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
    const result: Message | null = await controller.deleteMessage(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;