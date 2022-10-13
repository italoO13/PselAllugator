import IProductsModel from "../../repository/products/IProductsModel";
import IProduct from "../../interfaces/IProduct";
import IProductsService from "./IProductsService";

export default class ProductsService implements IProductsService {
  private model: IProductsModel

  constructor(model:IProductsModel){
    this.model = model;
  }
  async getProductById(id: number): Promise<IProduct[]> {
    const result = await this.model.getProductById(id);
    return result;
  }
  async search(name:string): Promise<IProduct[]> {
    const result = await this.model.search(name)
    return result;
  }

  async getAll(): Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }

  
}