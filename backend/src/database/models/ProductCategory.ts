import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class ProductCategory extends Model {
  id?: number;
  typeCategory: string;
}

ProductCategory.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  typeCategory: {
    type:STRING,
    allowNull:false
  }

}, {
  underscored: true,
  sequelize: db,
  tableName:'Product_category',
  timestamps: false,
});

export default ProductCategory;