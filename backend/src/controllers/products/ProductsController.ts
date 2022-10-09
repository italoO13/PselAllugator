import { NextFunction , Response, Request} from "express";
import IProductsService from "../../services/products/IProductsService";
import IProductsController from "./IProductsController";

export default class ProductsController implements IProductsController {
  private service: IProductsService

  constructor(service:IProductsService) {
    this.service = service;
  }

  getAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getAll();
      res.status(200).json(result);   
    } catch (error) {
      next(error);
    }
  }
}