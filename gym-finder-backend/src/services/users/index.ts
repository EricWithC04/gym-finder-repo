import { Server } from "../../server";
import { env } from "../../environments";

const server = new Server(env.USER_MODULE.PORT);

server.start()