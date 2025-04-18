import { Dialect } from "sequelize"
import { Environments } from "../interfaces"
import "dotenv/config"

export const env: Environments = {
    MAIN_PORT: parseInt(process.env.MAIN_PORT!),
    USER_MODULE: {
        PORT: parseInt(process.env.USER_MODULE_PORT!),
        DB_NAME: process.env.USER_MODULE_DB_NAME!,
        DB_USER: process.env.GENERAL_DB_USER!,
        DB_PASSWORD: process.env.GENERAL_DB_PASSWORD!,
        DB_PORT: process.env.GENERAL_DB_PORT!,
        DB_HOST: process.env.GENERAL_DB_HOST!,
        DB_DIALECT: process.env.GENERAL_DB_DIALECT as Dialect,
    },
    GYM_MODULE: {
        PORT: parseInt(process.env.GYM_MODULE_PORT!),
        DB_NAME: process.env.GYM_MODULE_DB_NAME!,
        DB_USER: process.env.GENERAL_DB_USER!,
        DB_PASSWORD: process.env.GENERAL_DB_PASSWORD!,
        DB_PORT: process.env.GENERAL_DB_PORT!,
        DB_HOST: process.env.GENERAL_DB_HOST!,
        DB_DIALECT: process.env.GENERAL_DB_DIALECT as Dialect,
    },
    POST_MODULE: {
        PORT: parseInt(process.env.POST_MODULE_PORT!),
        DB_NAME: process.env.POST_MODULE_DB_NAME!,
        DB_USER: process.env.GENERAL_DB_USER!,
        DB_PASSWORD: process.env.GENERAL_DB_PASSWORD!,
        DB_PORT: process.env.GENERAL_DB_PORT!,
        DB_HOST: process.env.GENERAL_DB_HOST!,
        DB_DIALECT: process.env.GENERAL_DB_DIALECT as Dialect,
    },
    SEARCH_MODULE: {
        PORT: parseInt(process.env.SEARCH_MODULE_PORT!),
    },
}