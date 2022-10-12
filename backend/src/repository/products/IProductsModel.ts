import IProduct from "../../interfaces/IProduct";

export default interface IProductsModel {
  getAll():Promise<IProduct[]>
  search(name:string):Promise<IProduct[]>
  getProductById(id:number):Promise<IProduct[]>
}