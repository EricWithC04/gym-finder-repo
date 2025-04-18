import { Server } from "../../server";
import { env } from "../../environments";
import { connectDB } from "./config/connectDB";

const server = new Server(env.USER_MODULE.PORT);

connectDB()
    .then(() => {
        server.start()
    })
