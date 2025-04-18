import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/db"
import { RoleModelInterface } from "../interfaces/role_model.interface"

class RoleModel extends Model implements RoleModelInterface {
    public id!: string
    public name!: string
}

RoleModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, tableName: "roles" })

export { RoleModel }