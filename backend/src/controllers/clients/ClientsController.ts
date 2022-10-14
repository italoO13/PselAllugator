import IClientsService from "../../services/clients/IClientsService";
import IClientsController from "./IClientsController";
import {Request, Response, NextFunction} from 'express'
import IRequestWithClient from "../../interfaces/IRequestWithClient";
import IJWT from "../../interfaces/IAuth";

export default class ClientsController implements IClientsController {
  private service: IClientsService
  constructor(service:IClientsService){
    this.service = service;
  }

  getByClientId = async (req: IRequestWithClient, res: Response, next: NextFunction) => {
    try {
      const {id} = req.client as IJWT; 
      const result = await this.service.getByClientId(id);
      res.status(200).json(result)
    } catch (error) {
      next(error);
    }
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