import IProduct from "../../interfaces/IProduct";

export default interface IProductsService {
  getAll():Promise<IProduct[]>
  search(name:string):Promise<IProduct[]>
}