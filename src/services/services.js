import { createUserRepository, GetUserInfoByIdRepository, getUserInfoByNickNameRepository } from "../repositories/repositories.js";
import { userSchema } from "../schema/userSchema.js";
import password_bycrypt from "../helpers/password_bycrypt.js";


/**
 * 
 * @param {*} userID 
 * @returns 
 */
export const getUserInfoByIdServices = async ( userID ) => 
{
    return await GetUserInfoByIdRepository(userID);
}

/**
 * Authenticate a user and log them in.
 * @param {Object} userInfoLogger - An object containing the user's login information.
 * @param {string} userInfoLogger.userName - The user's username.
 * @param {string} userInfoLogger.userNickname - The user's nickname.
 * @param {string} userInfoLogger.password - The user's password.
 * @returns {Object} An object containing the user's information and login status, or an error message.
 */
export const postLoggingService = async ( userInfoLogger ) => 
{
    Object.entries(userInfoLogger).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "")
            userInfoLogger = null;
    });

    if(!userInfoLogger)
    {
        return { message: "check your user nickName or password", status: 400, isUserLogged: false };
    }

    const userInfo = await getUserInfoByNameOrNickNameRepository(userInfoLogger.userName, userInfoLogger.userNickname);

    if(!password_bycrypt.comparePassword(userInfoLogger.password, userInfo.password))
    {
        return { message: "check your user nickName or password", status: 400, isUserLogged: false };
    }

    const userResponse = userInfo["_doc"];
    delete userResponse.password;
    return { ...userResponse, isUserLogged: true };   
}

/**
 * Create a new user in the database.
 * @param {Object} userData - An object containing user data.
 * @param {string} userData.email - The user's email address.
 * @param {string} userData.name - The user's first name.
 * @param {string} userData.lastName - The user's last name.
 * @param {string} userData.nickname - The user's nickname.
 * @param {string} userData.password - The user's password.
 * @param {string} userData.phone - The user's phone number.
 * @param {string} userData.address - The user's street address.
 * @param {string} userData.city - The user's city.
 * @returns {Object} An object containing the newly created user's information, or an error message.
 */
export const createUserService = async (userData) => 
{

    Object.entries(userData).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "")
            userData = null;
    });

    if (userData === null)
    {
        return { message: "All user data is required", status: 400, dataSaved: false };
    }

    if( await getUserInfoByNickNameRepository(userData.nickname))
    {
        return { message: "Nickname already exists", status: 400, dataSaved: false };
    }

    const newUser = userSchema;

    newUser.isActiveUser = false;
    newUser.email = userData.email;
    newUser.name = userData.name;
    newUser.nickname = userData.nickname;
    newUser.lastName = userData.lastName;
    newUser.password = await password_bycrypt.encryptPassword(userData.password);
    newUser.phone = userData.phone;
    newUser.address = userData.address;
    newUser.city = userData.city;
    newUser.userNotes = [];
    newUser.userTasks = [];

    const createUser = await createUserRepository(newUser);
    const userResponse = createUser["_doc"];
    delete userResponse.password;

    return { ...userResponse, dataSaved: true };
} 