import ISubscription from "./ISubscription";

export default interface IProductInventory {
  id:number;
  subscriptions: ISubscription[]
}