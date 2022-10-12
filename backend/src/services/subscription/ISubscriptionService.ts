import ISubscription from "../../interfaces/ISubscription";

export default interface ISubscriptionService {
  getSubsByclient(id:number):Promise<ISubscription[]>
  create(sub: ISubscription, productId:number):Promise<void>
}