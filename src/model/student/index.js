import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const studentModel = sequelize.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default studentModel;
