import { NextFunction , Response, Request} from "express";
import IProductsService from "../../services/products/IProductsService";
import IProductsController from "./IProductsController";

export default class ProductsController implements IProductsController {
  private service: IProductsService

  constructor(service:IProductsService) {
    this.service = service;
  }

  search = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const {name} = req.query; 
      const result = await this.service.search(name as string)
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
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