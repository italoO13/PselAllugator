import {Request, Response, NextFunction} from 'express'

export default interface IClientsController {
  create(req: Request, res:Response, next: NextFunction):Promise<void>
}