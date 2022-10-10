import ISessionModel from "./ISessionModel";
import Client from "../../database/models/Client";
import IClient from "../../interfaces/IClient";

export default class SessionModel implements ISessionModel {
  async verifyClient(email: string): Promise<IClient | null> {
    const result = await Client.findOne({
      where: {
        email
      }
    })
    return result;
  }
  
}