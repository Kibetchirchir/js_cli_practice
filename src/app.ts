import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import { cliSetup } from "./start_up/set_up";
import { askGithubCredentials } from "./start_up/enquirer";
import CLI from "clui";

cliSetup();

const run = async () => {
  const credentials = await askGithubCredentials();
  console.log(credentials);
};

const status = new CLI.Spinner("Authenticating you, please wait...");

status.start();

setTimeout(() => {
  status.stop();
}, 9000);

run();

const app = express();
const API_PREFIX = "/api";
app.use(cors());
app.use(express.json());
app.get(
  "/api",
  (req: Request, res: Response): Response => {
    return res.status(200).send({ message: "Welcome to node-ts boilerplate" });
  }
);
app.use(`${API_PREFIX}/main`, routes);
app.use(
  (req: Request, res: Response): Response => {
    return res.status(404).send({ message: "Route not found" });
  }
);
export default app;
