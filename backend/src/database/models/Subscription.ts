import { Model, INTEGER, literal, BOOLEAN } from 'sequelize';
import db from '.';
import Client from './Client';
import ProductInventory from './ProductInventory';

class Subscription extends Model {
  id?: number;
  dateInit?: Date;
  dateDevolution?: Date;
  productInventId: number;
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
  productInventId: {
    type: INTEGER,
    allowNull:false,
    references: {
      model:'Product_inventory',
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

Subscription.belongsTo(ProductInventory, {foreignKey:'productInventId', as: 'productInventory'})
ProductInventory.hasMany(Subscription, {foreignKey:'productInventId', as: 'subscriptions'})

export default Subscription;