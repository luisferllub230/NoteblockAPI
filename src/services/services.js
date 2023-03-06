import { createUserRepository, GetUserInfoByIdRepository } from "../repositories/repositories.js";
import bcrypt from "bcrypt";
import { userSchema } from "../schema/userSchema.js";

export const getUsersInformationServices = async () => {
    return await GetUserInfoByIdRepository();
}

export const createUserService = async (userData) => {

    Object.entries(userData).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "")
            userData = null;
    });

    if (userData === null)
        return { message: "All user data is required", status: 400, dataSaved: false };

    const newUser = userSchema;

    newUser.isLogged = false;
    newUser.isActiveUser = true;
    newUser.email = userData.email;
    newUser.name = userData.name;
    newUser.nickname = userData.nickname;
    newUser.lastName = userData.lastName;
    newUser.password = await bcrypt.hashSync(userData.password, 10);
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