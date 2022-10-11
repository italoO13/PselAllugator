import {Request, Response, NextFunction} from 'express'

export default interface ISessionController {
  login(req:Request, res:Response, next:NextFunction):Promise<void>
}