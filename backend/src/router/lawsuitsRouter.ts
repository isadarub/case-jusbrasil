import { Router } from 'express';
import { LawsuitsController } from '../controller/LawsuitsController';

export const lawsuitsRouter = Router();

const lawsuitsController = new LawsuitsController();

lawsuitsRouter.get('/', lawsuitsController.getLawsuits);
