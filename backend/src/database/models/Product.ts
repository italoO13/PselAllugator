import { Model, INTEGER, STRING,FLOAT } from 'sequelize';
import db from '.';
import ProductCategory from './ProductCategory';

class Product extends Model {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId: number;
}

Product.init({
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
  description: {
    type:STRING,
    allowNull:false
  },
  image: {
    type:STRING,
    allowNull:false
  },
  price: {
    type:FLOAT,
    allowNull:false
  },
  categoryId: {
    type: INTEGER, 
    allowNull:false,
    references: {
      model:'Product_category',
      key:'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }

}, {
  underscored: true,
  sequelize: db,
  tableName:'Products',
  timestamps: false,
});

Product.belongsTo(ProductCategory, {foreignKey:'categoryId', as: 'category'});
ProductCategory.hasMany(Product, {foreignKey:'categoryId', as: 'products'})

export default Product;