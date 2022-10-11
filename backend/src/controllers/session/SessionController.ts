import ISessionController from "./ISessionController";
import {Request, Response, NextFunction} from 'express'
import ISessionService from "../../services/session/ISessionService";
import Auth from "../../helper/Auth";

export default class SessionController implements ISessionController {

  private service: ISessionService;
  private auth: Auth

  constructor(service:ISessionService){
    this.service = service;
    this.auth = new Auth();
  }

 login = async(req:Request, res:Response, next:NextFunction) => {
  try {
    const {email, password} = req.body;
    const id = await this.service.login(email, password)
    const token = await this.auth.generateToken({id})
    res.status(200).json({token})
  } catch (error) {
    next(error);
  }
 }

}