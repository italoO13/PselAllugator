import { NextFunction , Response} from "express";
import IJWT from "../../interfaces/IAuth";
import IRequestWithClient from "../../interfaces/IRequestWithClient";
import ISubscriptionService from "../../services/subscription/ISubscriptionService";
import ISubscriptionController from "./ISubscriptionController";

export default class SubscriptionController implements ISubscriptionController {
  private service: ISubscriptionService

  constructor(service:ISubscriptionService) {
    this.service = service;
  }

  getSubsByClient = async(req: IRequestWithClient, res: Response, next: NextFunction) => {
    try {
      const {id} = req.client as IJWT; 
      const result = await this.service.getSubsByclient(id)
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
  }

  create = async(req: IRequestWithClient, res: Response, next: NextFunction) => {
    try {
      const {id} = req.client as IJWT; 
      const { productInventId } = req.body
      const result = await this.service.create({clientId: id, productInventId })
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
  }

}