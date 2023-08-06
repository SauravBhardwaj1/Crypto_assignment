import express from "express";
import { Request, Response } from "express";
import connectDB from "./db/connect";
import userRouter from "./src/routes/user";
import cors from "cors";

const bodyParser = require("body-parser");

const dotenv = require('dotenv').config();

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(express.json());

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/health-check',(req:Request, res:Response) => {
  res.status(200).send('server up and running ')
})

app.use('/api/user', userRouter);

/* Error handling */
app.use((req, res, next) => {
  const error = new Error("Route Not found");
  res.status(404).send({
    message: error.message,
  });
});

/* DB Connection */
connectDB();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
