import dotenv from "dotenv";

dotenv.config();

interface Iproperties {
  PORT: number;
  SERVER_URL: string;
  MYSQL_DATABASE: string;
  MYSQL_PORT: number;
  MYSQL_USERNAME: string;
  MYSQL_PASSWORD: string;
  MYSQL_HOST: string;
}

const properties: Iproperties = {
  PORT: Number(process.env.PORT) || 3000,

  SERVER_URL: process.env.SERVER_URL || "http://localhost:3000",

  MYSQL_DATABASE: process.env.MYSQL_DATABASE || "employee_db",

  MYSQL_PORT: Number(process.env.MYSQL_PORT) || 3306,

  MYSQL_USERNAME: process.env.MYSQL_USERNAME || "root",

  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "root",

  MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
};

export default properties;
