import express, { Request, Response, Router } from "express";
import { Skill } from "../../models/skill.model";
import response from "../../modules/reponse.module";
import controller from "./skill.controller";



const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Skill[] = await controller.getSkills();
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
    const result: Skill | null = await controller.getSkill(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const skill: Skill = req.body;
  
  try {
    const result: Skill = await controller.addSkill(skill);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const skill: Partial<Skill> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Skill | null = await controller.updateSkill(id, skill);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;