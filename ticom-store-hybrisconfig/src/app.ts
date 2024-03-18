import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import { corsUrl } from "./config";
import routes from "./routes";

process.on('uncaughtException', (e) => {
  console.log("Error occcuered while starting the app: ", e);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', routes);

export default app;