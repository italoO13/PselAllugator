import IClient from "../../interfaces/IClient";

export default interface ISessionModel {
  verifyClient(email:string):Promise<IClient | null>

}