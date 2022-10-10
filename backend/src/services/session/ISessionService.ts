export default interface ISessionService {
  login(email:string, password:string):Promise<number | undefined>
}