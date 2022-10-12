import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import CustomError from "../helper/CustomError";
import productsRouter from './productsRouter'
import clientsRouter from './clientsRouter';
import sessionRouter from './sessionRouter';
import subscriptionRouter from './subscriptionRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/clients', clientsRouter);
router.use('/session', sessionRouter);
router.use('/subscription', subscriptionRouter);

router.use((error:CustomError,req:Request, res:Response, next:NextFunction) => {
  console.log(error);
  if(error.code){
    return res.status(error.code).json({message: error.message})
  }
  res.status(500).json({message: 'Internal error server'})
})

export default router;