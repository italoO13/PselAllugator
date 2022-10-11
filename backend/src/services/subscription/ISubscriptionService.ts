import ISubscription from "../../interfaces/ISubscription";

export default interface ISubscriptionService {
  getSubsByclient(id:number):Promise<ISubscription[]>

}