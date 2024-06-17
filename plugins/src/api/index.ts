import { Router } from "express";
import webhookRoute from "./webhook";


const indexRoute = Router();

indexRoute.use("/webhook", webhookRoute);
 

export default indexRoute;