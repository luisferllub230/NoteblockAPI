import { userModule } from "../models/users.js";

export const GetUserInfoByIdRepository = async () => {
    return await userModule.find();
}