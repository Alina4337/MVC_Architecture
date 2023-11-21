import { Sequelize } from "sequelize";
const sequelize = new Sequelize("test", "postgres", "Humanrights1", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});
export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log(" database connected");
  } catch (error) {
    console.log("unable to connect", error);
  }
};
export default sequelize;
