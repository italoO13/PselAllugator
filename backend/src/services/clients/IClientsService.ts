import IClient, { IClientConsult } from "../../interfaces/IClient";

export default interface IClientsService {
  create(client:IClient):Promise<void>
  getByClientId(id:number):Promise<IClientConsult>
}