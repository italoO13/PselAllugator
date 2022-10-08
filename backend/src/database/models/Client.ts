import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Client extends Model {
  id?: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
}

Client.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  name: {
    type:STRING,
    allowNull:false
  },
  email: {
    type:STRING,
    allowNull:false
  },
  password: {
    type:STRING,
    allowNull:false
  },
  cpf: {
    type:STRING,
    allowNull:false
  },

}, {
  underscored: true,
  sequelize: db,
  tableName:'Clients',
  timestamps: false,
});

export default Client;