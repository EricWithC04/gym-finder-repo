import { Request, Response } from "express";
import { UserService } from "../services/user.service";

class UserController {

    constructor () {}

    static async routeGetAllUsers (_req: Request, res: Response) {
        const users = await UserService.getAllUsers()

        if (users.length === 0 || !users) {
            res.status(404).json({
                msg: "No hay usuarios disponibles"
            })
            throw new Error("No hay usuarios disponibles")
        }

        res.status(200).send(users)
    }
}

export { UserController }