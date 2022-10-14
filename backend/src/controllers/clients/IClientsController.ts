import {Request, Response, NextFunction} from 'express'
import IRequestWithClient from '../../interfaces/IRequestWithClient'

export default interface IClientsController {
  create(req: Request, res:Response, next: NextFunction):Promise<void>
  getByClientId(req: IRequestWithClient, res:Response, next: NextFunction):Promise<void>

}