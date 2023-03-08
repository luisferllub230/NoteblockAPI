import { postLoggingService } from "../../services/services.js";


const getLoggingController = async (req, res, next) => {

    //TODO: SEND THE USER LOGIN OPTIONS
    if(req.session.isUserLogged)
    {
        res.status(200).redirect("/API/v1/");
        return;
    }

    res.status(200).json({
        message: "Welcome to the login page",
    });
}

const postLoggingController = async (req, res, next) => {

    const {userName, userNickname, userPassword} = req.body;

    if(req.session.isUserLogged && req.session.userId !== undefined)
        return res.status(200).redirect("/API/v1/");

    const isUserLogged = await postLoggingService({userName, userNickname, userPassword});
}

export default {
    postLoggingController,
    getLoggingController
}