import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import IJWT from '../interfaces/IAuth';


export default class Auth {
  private config: jwt.SignOptions;
  private secret: jwt.Secret;

  constructor() {
    this.config = {
      expiresIn:'1d',
      algorithm:'HS256'
    };
    this.secret = process.env.JWT_SECRET || 'secret';
  }

  async generateToken(body:object):Promise<string> {
    const token = jwt.sign(
      {...body}, this.secret, {expiresIn: this.config.expiresIn, algorithm: this.config.algorithm}
    )
    return token;
  }

  async decodeToken(token: string):Promise<IJWT> {
    const info = jwt.verify(token, this.secret);
    return info as IJWT
  }


}