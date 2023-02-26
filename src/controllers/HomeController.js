import { GetUsersInformationServices } from "../services/services.js";


/**
 * This controller is responsible for the user information
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const GetUserInformationController = async ( req, res, next ) => {
    const user = await GetUsersInformationServices();
    res.json(user);
}
