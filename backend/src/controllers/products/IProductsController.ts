import {Request, Response, NextFunction} from 'express'

export default interface IProductsController {
  getAll(req: Request, res:Response, next: NextFunction):Promise<void>
}