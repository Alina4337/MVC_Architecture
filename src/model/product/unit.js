import sequelize from "../../db/config.js";
import productModel from "./product.js";
import { DataTypes } from "sequelize";
const unitModel = sequelize.define("unit", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
unitModel.hasMany(productModel);
productModel.belongsTo(unitModel);

export default unitModel;
