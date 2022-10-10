import { Router } from "express";
import ClientsModel from "../repository/clients/ClientsModel";
import ClientsService from "../services/clients/ClientsService";
import ClientsController from "../controllers/clients/ClientsController";
import ClientsValidators from "../middlewares/clientsValidators";

const clientsModel = new ClientsModel();
const clientsService = new ClientsService(clientsModel);
const clientsController = new ClientsController(clientsService)
const clientsValidators = new ClientsValidators()

const router = Router();

router.post('/',clientsValidators.validateCreated, clientsController.create)

export default router;