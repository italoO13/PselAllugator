import IProductInventory from "./IProductInventory";

export default interface IProduct {
  id?: number;
  name: string;
  description:string;
  image:string;
  price:number;
  categoryId:number;
  inventory?:IProductInventory[];
  qtd?:number;
}