import { postAddUserController } from "../../services/services.js";

const postAddUserController = async ( req, res, next ) => {   
    const userResponse = await createUserService(req.body);

    if(!userResponse.dataSaved)
    {
        res.json(userResponse);
        return;
    }

    res.status(200).json({
        message: "User created successfully",
        ...userResponse
    });
}


export default {
    postAddUserController,
}