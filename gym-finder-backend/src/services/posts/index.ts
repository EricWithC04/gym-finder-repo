import { Server } from "../../server";
import { env } from "../../environments";

const server = new Server(env.POST_MODULE.PORT);

server.start()