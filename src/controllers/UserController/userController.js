import { getUserInfoByIdServices } from "../../services/services.js";

const getUserInfoByIdController = async ( req, res, next ) => {
    // const user = await getUsersInfoByIdServices();
    // res.json(user);

    //si ya iniciamos sesion, redirigir a la pagina principal

    //si no, redirigir a la pagina de login
    res.status(200).json({
        message: "Welcome to the API",
        session: req.session.user = "luis"
    });
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