import * as bycript from 'bcryptjs';

  
const encryptPassword = (password:string):string => {
  const salt = bycript.genSaltSync(10)
  return bycript.hashSync(password, salt);
}
const comparePassword = (cryptPassword: string, password: string) => {
  return bycript.compareSync(password, cryptPassword);
}


export default {
  encryptPassword,
  comparePassword
}