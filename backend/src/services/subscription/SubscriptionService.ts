import ISubscriptionModel from "../../repository/subscription/ISubscriptionModel";
import ISubscription from "../../interfaces/ISubscription";
import ISubscriptionService from "./ISubscriptionService";

export default class SubscriptionService implements ISubscriptionService {
  private model: ISubscriptionModel

  constructor(model: ISubscriptionModel) {
    this.model = model;
  }
  async create(sub: ISubscription, productId:number): Promise<void> {
    await this.model.create({...sub, devolution:false }, productId);
  }

  async getSubsByclient(id: number): Promise<ISubscription[]> {
    const result = await this.model.getSubsById(id);
    return result;
  }

  
}