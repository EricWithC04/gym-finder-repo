import { Server } from "../../server";
import { env } from "../../environments";

const server = new Server(env.SEARCH_MODULE.PORT);

server.start()