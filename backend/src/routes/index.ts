import { Router } from "express";
import productsRouter from './productsRouter'

const router = Router();

router.use('/products', productsRouter)

router.use((error:CustomError,req:Request, res:Response, next:NextFunction) => {
  console.log(error);
  if(error.code){
    return res.status(error.code).json({message: error.message})
  }
  res.status(500).json({message: 'Internal error server'})
})

export default router;