import {Response, NextFunction} from 'express'
import IRequestWithClient from "../../interfaces/IRequestWithClient";

export default interface ISubscriptionController {
  getSubsByClient(req: IRequestWithClient, res:Response, next: NextFunction):Promise<void>
  create(req: IRequestWithClient, res:Response, next: NextFunction):Promise<void>

}