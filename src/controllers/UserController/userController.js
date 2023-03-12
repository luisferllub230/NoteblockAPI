import { getUserInfoByIdServices } from "../../services/services.js";

const getUserInfoByIdController = async ( req, res, next ) => {
    
    const { userId } = req.session;
    
    //TODO: VALIDATE IF USER ID IS VALID
    const user = await getUsersInfoByIdServices(userId);
    res.json(user);
}

const patchUserInformationController = async ( req, res, next ) => {

}

const deleteUserInformationController = async ( req, res, next ) => {

}

export default {
    getUserInfoByIdController,
    patchUserInformationController,
    deleteUserInformationController,
};