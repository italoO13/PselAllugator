import IClientsService from "../../services/clients/IClientsService";
import IClientsController from "./IClientsController";
import {Request, Response, NextFunction} from 'express'

export default class ClientsController implements IClientsController {
  private service: IClientsService
  constructor(service:IClientsService){
    this.service = service;
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.create(req.body);
      res.status(201).json({message: 'created'})
    } catch (error) {
      next(error);
    }
  }
}