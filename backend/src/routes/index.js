import { Router } from "express";
import { carRouter } from "./carRouter.js";

const router = Router();

router.use("/car", carRouter);

export { router };
