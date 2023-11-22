import sequelize from "../../db/config.js";
// import productModel from "./product.js";
import { DataTypes } from "sequelize";
const invoiceModel = sequelize.define("invoice", {
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// unitModel.hasMany(productModel);
// productModel.belongsTo(unitModel);

export default invoiceModel;
