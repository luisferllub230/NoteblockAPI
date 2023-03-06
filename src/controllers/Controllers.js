import { getUsersInformationServices, createUserService } from "../services/services.js";


/**
 * This controller is responsible for the user information
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const GetUserInformationController = async ( req, res, next ) => {
    const user = await getUsersInformationServices();
    res.json(user);
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const CreateUserController = async ( req, res, next ) => {   
    const userResponse = await createUserService(req.body);

    if(!userResponse.dataSaved)
    {
        res.json(userResponse);
        return;
    }

    res.json({
        message: "User created successfully",
        status: 200,
        ...userResponse
    });
}
