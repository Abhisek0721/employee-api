import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import properties from './src/config/properties';
import employeeRouters from "./src/api/routers/employeeRouters";

dotenv.config();

const app:Express = express();

const port:number = properties.PORT;
const serverUrl:string = properties.SERVER_URL;

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRouters);

app.get("/",async (req:Request, res:Response) => {
  return res.send(`<h1>Running on Port : ${port}</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Open Browser: ${serverUrl}`);
});
