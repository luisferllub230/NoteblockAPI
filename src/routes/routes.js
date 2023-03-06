import { Router } from "express";
import { CreateUserController, GetUserInformationController } from "../controllers/Controllers.js";

const router = Router();

router.get("/", GetUserInformationController);
router.post("/createUser", CreateUserController);

export default router;