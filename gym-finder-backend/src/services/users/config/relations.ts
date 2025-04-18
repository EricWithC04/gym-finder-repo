import { UserModel, RoleModel, ResetPasswordRequestModel } from "../models";

export const associations = () => {
    return new Promise(( resolve, reject ) => {
        try {
            RoleModel.hasMany(UserModel, {
                foreignKey: "roleId",
                sourceKey: "id"
            })
            UserModel.belongsTo(RoleModel, {
                foreignKey: "roleId",
                targetKey: "id",
                as: "role"
            })
            
            UserModel.hasMany(ResetPasswordRequestModel, {
                foreignKey: "userId",
                sourceKey: "id"
            })
            ResetPasswordRequestModel.belongsTo(UserModel, {
                foreignKey: "userId",
                targetKey: "id"
            })
            resolve({ message: "associations has been created" })
        } catch (err) {
            console.error(err)
            reject(err)
        }
    })
}