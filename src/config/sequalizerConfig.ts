import { Sequelize } from "sequelize";
import properties from "./properties";
import EmergencyContact from "../api/models/emergencyContactModel";
import Employee from "../api/models/employeeModel";

const sequelize = new Sequelize(
  properties.MYSQL_DATABASE,
  properties.MYSQL_USERNAME,
  properties.MYSQL_PASSWORD,
  {
    host: properties.MYSQL_HOST,
    dialect: "mysql",
    port: properties.MYSQL_PORT,
  }
);

// Sync the models with the database
sequelize.sync({ force: false }).then(() => {
  console.log("Database and tables synced!");
});

export default sequelize;
