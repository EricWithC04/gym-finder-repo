import { Dialect } from "sequelize"

export interface Environments {
    MAIN_PORT: number
    USER_MODULE: {
        PORT: number
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
        DB_PORT: string
        DB_HOST: string
        DB_DIALECT: Dialect
    }
    GYM_MODULE: {
        PORT: number
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
        DB_PORT: string
        DB_HOST: string
        DB_DIALECT: Dialect
    }
    POST_MODULE: {
        PORT: number
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
        DB_PORT: string
        DB_HOST: string
        DB_DIALECT: Dialect
    }
    SEARCH_MODULE: {
        PORT: number
    }
}