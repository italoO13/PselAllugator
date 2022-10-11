import ISubscription from "../../interfaces/ISubscription";

export default interface ISubscriptionModel {
  getSubsById(id:number):Promise<ISubscription[]>
  create(sub: ISubscription):Promise<void>;

}