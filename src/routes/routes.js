import { Router } from "express";
import { GetUserInformationController } from "../controllers/HomeController.js";

const router = Router();

router.get("/", GetUserInformationController);

export default router;