import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
const practiceModel = sequelize.define("practice", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default practiceModel;
