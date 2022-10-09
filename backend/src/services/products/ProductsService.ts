import IProductsModel from "../../repository/products/IProductsModel";
import IProduct from "../../interfaces/IProduct";
import IProductsService from "./IProductsService";

export default class ProductsService implements IProductsService {
  private model: IProductsModel

  constructor(model:IProductsModel){
    this.model = model;
  }

  async getAll(): Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }

  // private countInventory(result: any):number {
  //   return result.reduce((acc:number, invent:any) => {
  //     if(invent.subscriptions.length === 0) {
  //       return acc + 1
  //     }
  //     if(invent.subscriptions.every(({devolution}) => devolution===true )) {
  //       return acc +1
  //     }
  //     return acc
  //   }, 0)
  // }
  
}