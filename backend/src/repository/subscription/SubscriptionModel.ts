import ISubscriptionModel from "./ISubscriptionModel";
import ISubscription from "../../interfaces/ISubscription";
import Subscription from "../../database/models/Subscription";
import ProductInventory from "../../database/models/ProductInventory";
import Product from "../../database/models/Product";

export default class SubscriptionModel implements ISubscriptionModel {
  async create(sub: ISubscription): Promise<void> {
    await Subscription.create({...sub});
  }

  async getSubsById(id: number): Promise<ISubscription[]> {
    const result = await Subscription.findAll({
      include:[
        {model: ProductInventory, as: 'productInventory', include:[
          {model: Product, as: 'product'}
        ], attributes:{exclude:['id']}}
      ],

      where:{clientId: id}
    });
    return result;
  }

}