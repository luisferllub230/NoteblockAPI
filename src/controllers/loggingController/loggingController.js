import { postLoggingService } from "../../services/services.js";


const getLoggingController = async (req, res, next) => {

    if (req.session.isUserLogged && req.session.userId !== undefined) {
        return res.status(200).redirect("/API/v1/");
    }

    const { userNickname, userPassword } = req.query;
    const userInformation = await postLoggingService({userNickname, userPassword });

    if (!userInformation.isUserValidate) {
        return res.status(400).json({
            message: userInformation.message,
            status: userInformation.status,
            isUserValidate: userInformation.isUserValidate
        });
    }

    req.session.userId = userInformation._id;
    req.session.isUserLogged = userInformation.isUserLogged;
    
    res.status(200).json({ ...userInformation });
}

export default {
    getLoggingController
}