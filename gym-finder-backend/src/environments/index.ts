import { Environments } from "../interfaces"
import "dotenv/config"

export const env: Environments = {
    MAIN_PORT: parseInt(process.env.MAIN_PORT!),
    USER_MODULE: {
        PORT: parseInt(process.env.USER_MODULE_PORT!),
    },
    GYM_MODULE: {
        PORT: parseInt(process.env.GYM_MODULE_PORT!),
    },
    POST_MODULE: {
        PORT: parseInt(process.env.POST_MODULE_PORT!),
    },
    SEARCH_MODULE: {
        PORT: parseInt(process.env.SEARCH_MODULE_PORT!),
    },
}