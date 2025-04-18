import { UserModel } from "../models";

class UserService {

    constructor () {}

    static async getAllUsers () {
        const users = await UserModel.findAll();
        return users
    }

}

export { UserService }