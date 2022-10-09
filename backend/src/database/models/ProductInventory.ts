import { Model, INTEGER } from 'sequelize';
import db from '.';
import Product from './Product';

class ProductInventory extends Model {
  id?: number;
  productId: number;
}

ProductInventory.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  productId: {
    type:INTEGER,
    allowNull:false,
    references: {
      model:'Products',
      key:'id'
    }
  }

}, {
  underscored: true,
  sequelize: db,
  tableName:'Product_inventory',
  timestamps: false,
});

ProductInventory.belongsTo(Product, {foreignKey:'productId', as:'product'});
Product.hasMany(ProductInventory, {foreignKey:'productId', as:'invetory'})

export default ProductInventory;