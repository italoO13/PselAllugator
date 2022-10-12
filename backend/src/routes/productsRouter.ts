import { Router } from "express";
import ProductsModel from "../repository/products/ProductsModel";
import ProductsService from "../services/products/ProductsService";
import ProductsController from "../controllers/products/ProductsController";

const productsModel = new ProductsModel();
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService)

const router = Router();

router.get('/search', productsController.search)
router.get('/:id', productsController.getProductById)
router.get('/', productsController.getAll)

export default router;