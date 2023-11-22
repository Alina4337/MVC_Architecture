import sequelize from "../../db/config.js";
// import productModel from "./product.js";
import { DataTypes } from "sequelize";
import invoiceModel from "../invoice/invoiceModel.js";
const invoiceProductModel = sequelize.define("invoiceProduct", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
invoiceProductModel.belongsTo(invoiceModel);
invoiceModel.hasMany(invoiceProductModel);

export default invoiceProductModel;
