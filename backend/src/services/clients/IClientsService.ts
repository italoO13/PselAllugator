import IClient from "../../interfaces/IClient";

export default interface IClientsService {
  create(client:IClient):Promise<void>
}