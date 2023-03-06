import { userModule } from "../models/users.js";


export const GetUserInfoByIdRepository = async ( userID ) => {
    return await userModule.findById('');
}

export const getUserInfoByEmailAndPasswordRepository = async ( email, password ) => {
    return await userModule.findOne({email, password});
}

export const createUserRepository = async ( user ) => {
    return await userModule.create(user);
} 