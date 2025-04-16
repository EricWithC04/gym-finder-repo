import { Server } from "./server"
import { env } from "./environments"

const server = new Server(env.MAIN_PORT)

server.start()