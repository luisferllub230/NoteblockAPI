import { GetUserInfoByIdRepository } from "../repositories/repositories.js";

export const GetUsersInformationServices = async () => {
    return await GetUserInfoByIdRepository();
}