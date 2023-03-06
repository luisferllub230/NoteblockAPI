import { Router } from "express";
import { CreateUserController, GetUserInformationController } from "../../controllers/Controllers.js";

const router = Router();

router.get("/", GetUserInformationController);
router.post("/createUser", CreateUserController);
router.post("/login", GetUserInformationController);

export default router;