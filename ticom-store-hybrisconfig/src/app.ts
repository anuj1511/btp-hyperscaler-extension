import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";

import { port } from './config';
console.log(port)

process.on('uncaughtException', (e) => {
  console.log("Error occcuered while starting the app: ", e);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Anuj:Anuj@database.34bt3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use('/', routes);

export default app;