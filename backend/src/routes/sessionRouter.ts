import SessionModel from "../repository/session/SessionModel";
import SessionService from "../services/session/SessionService";
import SessionController from "../controllers/session/SessionController";
import SessionValidators from "../middlewares/sessionValidators";

import { Router } from "express";

const router = Router();

const sessionModel = new SessionModel()
const sessionService = new SessionService(sessionModel)
const sessionController = new SessionController(sessionService)
const sessionValidators = new SessionValidators()

router.post('/',sessionValidators.validate, sessionController.login);

export default router;

