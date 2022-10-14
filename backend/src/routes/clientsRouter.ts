import { Router } from "express";
import ClientsModel from "../repository/clients/ClientsModel";
import ClientsService from "../services/clients/ClientsService";
import ClientsController from "../controllers/clients/ClientsController";
import ClientsValidators from "../middlewares/clientsValidators";
import AuthMiddleware from "../middlewares/auth";

const clientsModel = new ClientsModel();
const clientsService = new ClientsService(clientsModel);
const clientsController = new ClientsController(clientsService)
const clientsValidators = new ClientsValidators()
const authMiddleware = new AuthMiddleware()

const router = Router();

router.post('/',clientsValidators.validateCreated, clientsController.create)
router.get('/',authMiddleware.verifyClient, clientsController.getByClientId )

export default router;