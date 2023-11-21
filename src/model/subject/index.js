import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
const subjectModel = sequelize.define("subject", {
  subName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subTeacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default subjectModel;
