import { Router } from "express";
import loggingController from "../../controllers/loggingController/loggingController";
import registrationController from "../../controllers/registrationController/registrationController";
import userController from "../../controllers/UserController/userController";


const router = Router();

router
    .get("/:userId", userController.getUserInfoByIdController)
    .post("/addUserRegistration", registrationController.postAddUserController)
    .post("/login", loggingController.postLoggingController);

export default router;