import { createUserService } from "../../services/services.js";

const getRegisterController = async ( req, res, next ) => {
    //TODO: SEND THE USER REGISTER OPTIONS
    res.status(200).json({
        message: "Welcome to the register page"
    });
}

const postAddUserController = async ( req, res, next ) => {   
    const userResponse = await createUserService(req.body);

    if(!userResponse.dataSaved)
    {
        res.json(userResponse);
        return;
    }

    req.session.isUserLogged = true;
    req.session.userId = userResponse._id;

    res.status(200).json({
        message: "User created successfully",
        ...userResponse
    });
}


export default {
    getRegisterController,
    postAddUserController,
}