export default interface ISubscription {
  id?: number;
  dateInit?: Date;
  dateDevolution?: Date;
  productInventId: number;
  clientId: number;
  devolution?:boolean;
}