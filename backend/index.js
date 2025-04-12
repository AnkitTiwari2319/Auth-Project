import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";  
import auth from "./router/auth.js";

dotenv.config();

const app = express();

db();
app.use(cors());
app.use(express.json());

app.use('/api' , auth);


const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server started at PORT ${Port}`);
});
