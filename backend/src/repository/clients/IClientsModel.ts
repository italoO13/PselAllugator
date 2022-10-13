import IClient, { IClientConsult } from "../../interfaces/IClient";

export default interface IClientsModel {
  create(client:IClient):Promise<void>
  getClientById(id:number):Promise<IClientConsult | null>
}