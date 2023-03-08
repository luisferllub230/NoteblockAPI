import userModule from "../models/users.js";


export const GetUserInfoByIdRepository = async ( userID ) => {
    return await userModule.findById(userID);
};

export const getUserInfoByNameOrNickNameRepository = async ( userName, nickname ) => {
    return await userModule.findOne({userName, nickname});
}

export const getUserInfoByNickNameRepository = async ( nickname ) => {
    return await userModule.findOne({nickname});;
};

export const createUserRepository = async ( user ) => {
    return await userModule.create(user);
};