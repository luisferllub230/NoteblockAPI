import { postLoggingService } from "../../services/services";


const postLoggingController = async ( req, res, next ) => {

    const {userName, userNickname, userPassword} = req.body;

    const isUserLogged = await postLoggingService( userName, userNickname, userPassword );
}

export default {
    postLoggingController,
}