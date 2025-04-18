import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { ResetPasswordRequestModelInterface } from "../interfaces/reset_password_request.interface";

class ResetPasswordRequestModel extends Model implements ResetPasswordRequestModelInterface {
    public id!: string
    public token!: string
    public createdAt!: Date
    public expiresAt!: Date
    public used!: boolean
}

ResetPasswordRequestModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    used: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { sequelize, tableName: "reset_password_requests" })

export { ResetPasswordRequestModel }