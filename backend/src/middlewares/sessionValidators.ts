import schemaSession from "../schemas/session.schemas";
import {Response, Request, NextFunction} from 'express'
import CustomError from "../helper/CustomError";

export default class SessionValidators {
  private schema: typeof schemaSession
  constructor() {
    this.schema = schemaSession;
  }

  validate = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const { error } = this.schema.validate(req.body);
      if(error) {
        return next(new CustomError(400, error.message))
      }
      next()
    } catch (error) {
      next(error);
    }

  }

}