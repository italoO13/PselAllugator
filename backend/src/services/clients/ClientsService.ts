import IClient, { IClientConsult } from "../../interfaces/IClient";
import IClientsService from "./IClientsService";
import IClientsModel from "../../repository/clients/IClientsModel";
import crypt from "../../helper/crypt";

export default class ClientsService implements IClientsService {
  private model: IClientsModel

  constructor(model:IClientsModel){
    this.model = model;
  }
  async getByClientId(id: number): Promise<IClientConsult> {
    const result = await this.model.getClientById(id);
    return result as IClientConsult;
  }

  async create(client: IClient): Promise<void> {
    await this.model.create({...client, password: crypt.encryptPassword(client.password)});
  }
  
}