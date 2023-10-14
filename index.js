import express from "express";
const app = express();
import Connection from "./config/connection.js";
import { config } from "dotenv";
config();

app.use(express.json());

Connection();

import userRoute from "./routes/user.js";

app.use("/", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running on port: ${process.env.PORT}`);
});
