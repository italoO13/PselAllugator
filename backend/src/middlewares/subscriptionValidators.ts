import schemaSubscription from "../schemas/subscription.schemas";
import {Response, Request, NextFunction} from 'express'
import CustomError from "../helper/CustomError";

export default class SubscriptionValidators {
  private schema: typeof schemaSubscription
  constructor() {
    this.schema = schemaSubscription;
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