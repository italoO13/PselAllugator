import ISessionService from "./ISessionService";
import ISessionModel from "../../repository/session/ISessionModel";
import crypt from "../../helper/crypt";
import CustomError from "../../helper/CustomError";

export default class SessionService implements ISessionService {
  private model: ISessionModel;
  private auth = crypt;

  constructor(model: ISessionModel){
    this.model = model;
  }

  async login(email: string, password: string): Promise<number | undefined> {
    const client = await this.model.verifyClient(email);
    if(!client) {
      throw new CustomError(409, 'Email or password is incorrect')
    }
    if(!this.auth.comparePassword(client.password, password)) {
      throw new CustomError(409, 'Email or password is incorrect')
    }
    return client.id
  }
}