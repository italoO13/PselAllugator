import IClient from "../../interfaces/IClient";
import IClientsModel from "./IClientsModel";
import Client from "../../database/models/Client";
import CustomError from "../../helper/CustomError";
import { Op } from "sequelize";

export default class ClientsModel implements IClientsModel {
  private model = Client

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