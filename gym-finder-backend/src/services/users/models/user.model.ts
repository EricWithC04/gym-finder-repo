import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { UserModelInterface } from "../interfaces/user_model.interface";

class UserModel extends Model implements UserModelInterface {
    public id!: string;
    public name!: string;
    public surname!: string;
    public email!: string;
    public password!: string;
}

UserModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, tableName: "users" })

export { UserModel }