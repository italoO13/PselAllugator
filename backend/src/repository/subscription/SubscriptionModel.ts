import ISubscriptionModel from "./ISubscriptionModel";
import ISubscription from "../../interfaces/ISubscription";
import Subscription from "../../database/models/Subscription";
import ProductInventory from "../../database/models/ProductInventory";
import Product from "../../database/models/Product";

export default class SubscriptionModel implements ISubscriptionModel {

  private async getProductInventory(id:number):Promise<ProductInventory[]> {
    const result = await ProductInventory.findAll({
      include:[
        {model: Subscription, as:'subscriptions'}
      ],
      where: {productId: id}
    }) 

    return result.filter((obj: any) =>{ 
      if(obj.subscriptions.length ===0) {
        return true;
      }

      if(obj.subscriptions.some((sub:ISubscription) => sub.devolution === true)){
        return true;
      }
    })
  }


  async create(sub: ISubscription, productId:number): Promise<void> {
    const availableProducts = await this.getProductInventory(productId);

    await Subscription.create({...sub, productInventId: availableProducts[0].id});
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