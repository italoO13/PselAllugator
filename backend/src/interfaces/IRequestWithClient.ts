import {Request} from 'express'

export default interface IRequestWithClient extends Request {
  client?: {id: number}
}