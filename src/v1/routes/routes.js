import { Router } from "express";
import passport from "passport";
import loggingController from "../../controllers/loggingController/loggingController.js";
import registrationController from "../../controllers/registrationController/registrationController.js";
import userController from "../../controllers/UserController/userController.js";
import notRouterController from "../../controllers/404Controller/404Controller.js";
import { isLogged } from "../../middlewares/loggingValidator.js";


const router = Router();

router
    .get("/", isLogged, userController.getUserInfoByIdController)
    .get("/login", loggingController.getLoggingController)
    .get("/register", isLogged, registrationController.getRegisterController)

    .post("/login", loggingController.postLoggingController)
    .post("/register", registrationController.postAddUserController)

    .all("*", notRouterController.notRouterController);

export default router;