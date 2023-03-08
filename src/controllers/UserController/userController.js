import { getUsersInfoByIdServices } from "../../services/services.js";

const getUserInfoByIdController = async ( req, res, next ) => {
    const user = await getUsersInfoByIdServices();
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