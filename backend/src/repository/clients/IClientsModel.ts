import IClient from "../../interfaces/IClient";

export default interface IClientsModel {
  create(client:IClient):Promise<void>
}