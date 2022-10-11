import Auth from "../helper/Auth";
import {Response, NextFunction} from 'express'
import CustomError from "../helper/CustomError";
import IRequestWithClient from "../interfaces/IRequestWithClient";
import IJWT from "../interfaces/IAuth";

export default class AuthMiddleware {
  private auth: Auth;
  constructor(){
    this.auth = new Auth()
  }

  verifyClient = async(req: IRequestWithClient, res:Response, next: NextFunction) => {
    const {authorization} = req.headers;
    if(!authorization) {
      return next(new CustomError(400, 'Token not informed'))
    }
    try {
      const client = await this.auth.decodeToken(authorization)
      req.client = client as IJWT;
      next()
    } catch (error) {
      next(new CustomError(403, 'Access token invalid'))
    }

  }
}