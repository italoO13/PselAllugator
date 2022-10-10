import schemaClient from '../schemas/clients.schemas';
import { NextFunction , Response, Request} from "express";
import CustomError from '../helper/CustomError';


export default class ClientsValidators {
  constructor(private schema = schemaClient){}

  validateCreated = async (req:Request, res:Response, next:NextFunction) => {
    const {error} = this.schema.validate(req.body);
    if(error) {
      const [code, message] = error.message.split('|')
      return next(new CustomError(Number(code), message));
    }
    next();
  }


}