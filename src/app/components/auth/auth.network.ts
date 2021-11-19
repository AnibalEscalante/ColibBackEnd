import express, { Request, Response, Router } from "express";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
import response from "../../modules/reponse.module";
import controller from "./auth.controller";

const router: Router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  const auth: Auth = req.body;

  try {
    const result: string | null = await controller.login(auth);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 400);
  }
});

router.post('/user/signIn', async (req: Request, res: Response) => {
  const auth: Auth & User = req.body;

  try {
    const result: Auth = await controller.userSignIn(auth);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 400);
  }
});


export default router;