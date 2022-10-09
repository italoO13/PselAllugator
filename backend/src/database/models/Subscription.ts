import { Model, INTEGER, literal, BOOLEAN } from 'sequelize';
import db from '.';
import Client from './Client';
import ProductInventory from './ProductInventory';

class Subscription extends Model {
  id?: number;
  date_init?: Date;
  data_devolution?: Date;
  productInventory: number;
  clientId: number;
  devolution?:boolean;
}

Subscription.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  dateInit: {
    type:"TIMESTAMP",
    defaultValue: literal('CURRENT_TIMESTAMP')
  },
  dateDevolution: {
    type:"TIMESTAMP",
  },
  productInventory: {
    type: INTEGER,
    allowNull:false,
    references: {
      model:'Product_invetory',
      key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
  },
  clientId: {
    type: INTEGER,
    allowNull:false,
    references: {
      model: 'Clients',
      key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
  },
  devolution: {
    type: BOOLEAN,
    defaultValue:0
  }

}, {
  underscored: true,
  sequelize: db,
  tableName:'Subscription',
  timestamps: false,
});

Subscription.belongsTo(Client, {foreignKey:'clientId', as: 'client'})
Client.hasMany(Subscription, {foreignKey:'clientId', as: 'subscriptions'})

Subscription.belongsTo(ProductInventory, {foreignKey:'productInventory', as: 'productInventory'})
ProductInventory.hasMany(Subscription, {foreignKey:'productInventory', as: 'subscriptions'})

export default Subscription;