import { Server } from "../../server";
import { env } from "../../environments";
import { connectDB } from "./config/connectDB";

import userRouter from "./routes/user.routes"

const server = new Server(env.USER_MODULE.PORT);

server.setRoutes((app) => {
    app.use("/user", userRouter)
})

connectDB()
    .then(() => {
        server.start()
    })
