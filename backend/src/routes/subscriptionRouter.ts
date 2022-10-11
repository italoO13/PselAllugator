import SubscriptionModel from "../repository/subscription/SubscriptionModel";
import SubscriptionService from "../services/subscription/SubscriptionService";
import SubscriptionController from "../controllers/subscription/SubscriptionController";
import AuthMiddleware from "../middlewares/auth";

import { Router } from "express";

const router = Router();

const subscriptionModel = new SubscriptionModel()
const subscriptionService = new SubscriptionService(subscriptionModel)
const subscriptionController = new SubscriptionController(subscriptionService)
const authMiddleware = new AuthMiddleware()


router.get('/',authMiddleware.verifyClient, subscriptionController.getSubsByClient);
router.post('/', authMiddleware.verifyClient, subscriptionController.create);

export default router;

