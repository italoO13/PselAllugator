import IProduct from "../../interfaces/IProduct";

export default interface IProductsModel {
  getAll():Promise<IProduct[]>
}