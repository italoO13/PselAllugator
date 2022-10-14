import IClient, { IClientConsult } from "../../interfaces/IClient";
import IClientsModel from "./IClientsModel";
import Client from "../../database/models/Client";
import CustomError from "../../helper/CustomError";
import { Op } from "sequelize";

export default class ClientsModel implements IClientsModel {
  private model = Client
  
  async getClientById(id: number): Promise<IClientConsult> {
    const result = await this.model.findOne({
      where:{id}
    })
    if(!result) {
      throw new CustomError(400,'Client not Found')
    }
    const {name, email, cpf } = result
    return {id, name, email, cpf};
  }


  async validateExistsClient(client: IClient):Promise<void> {
    const {email, cpf} = client;
    const searchClient = await this.model.findOne({
      where:{[Op.or]:{ email, cpf} }
    })
    if(searchClient) {
      throw new CustomError(409, 'User or cpf already registered')
    }
  }

  async create(client: IClient): Promise<void> {
    await this.validateExistsClient(client);
    await this.model.create({...client})
  }


}