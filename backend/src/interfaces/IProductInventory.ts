import ISubscription from "./ISubscription";

export default interface IProductInventory {
  id:number;
  productId?:number;
  subscriptions: ISubscription[]
}