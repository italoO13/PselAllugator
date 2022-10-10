import IClient from "../../interfaces/IClient";
import IClientsService from "./IClientsService";
import IClientsModel from "../../repository/clients/IClientsModel";

export default class ClientsService implements IClientsService {
  private model: IClientsModel

  constructor(model:IClientsModel){
    this.model = model;
  }

  async create(client: IClient): Promise<void> {
    await this.model.create(client);
  }
  
}