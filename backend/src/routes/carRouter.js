import { Router } from "express";
import { getCars } from "../controller/index.js";

const carRouter = Router();

carRouter.get("/", getCars);

export { carRouter };
