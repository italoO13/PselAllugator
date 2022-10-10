import ProductInventory from "../../database/models/ProductInventory";
import Product from "../../database/models/Product";
import IProduct from "../../interfaces/IProduct";
import IProductsModel from "./IProductsModel";
import Subscription from "../../database/models/Subscription";
import IProductInventory from "../../interfaces/IProductInventory";
import { Op } from "sequelize";


export default class ProductsModel implements IProductsModel {
  async getAll(): Promise<IProduct[]> {
    const result = await Product.findAll({
      include: [
        {model: ProductInventory, as: 'inventory', 
        include: [{model: Subscription, as:'subscriptions'}],
        attributes: {exclude: ['productId']}}
      ]
    });

    const newResult = this.adapter(result);
    return newResult
  }

  async search(name:string): Promise<IProduct[]> {
    const result = await Product.findAll({
      include: [
        {model: ProductInventory, as: 'inventory', 
        include: [{model: Subscription, as:'subscriptions'}],
        attributes: {exclude: ['productId']}}
      ], where:{name: {[Op.substring]: name}}
    });
    const newResult = this.adapter(result);
    return newResult
  }
  
  private adapter(products:IProduct[]):IProduct[] {
    const newProduct = products.map((prod:IProduct) => {
      const {id, name, description, image, price, categoryId}:IProduct = prod
      if(!prod.inventory) {
        return {id, name, description, image, price, categoryId, qtd:0}
      }
      return {id, name, description, image, price, categoryId, qtd: this.countQtd(prod.inventory)}
    })
    return newProduct;
  }

  private countQtd(inventory: IProductInventory[]):number {
    return inventory.reduce((acc:number, invent:IProductInventory) => {
      if(invent.subscriptions.length === 0) {
        return acc + 1
      }
      if(invent.subscriptions.every(({devolution}) => devolution===true )) {
        return acc +1
      }
      return acc
    }, 0)
  }
}