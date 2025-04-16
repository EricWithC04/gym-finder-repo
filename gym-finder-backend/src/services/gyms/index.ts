import { Server } from "../../server";
import { env } from "../../environments";

const server = new Server(env.GYM_MODULE.PORT);

server.start()