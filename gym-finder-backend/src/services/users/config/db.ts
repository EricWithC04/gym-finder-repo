import { Sequelize } from "sequelize";
import { env } from "../../../environments";

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_HOST,
    DB_DIALECT
} = env.USER_MODULE

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect: DB_DIALECT
})

export { sequelize }