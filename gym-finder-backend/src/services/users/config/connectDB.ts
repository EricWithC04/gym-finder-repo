import { sequelize } from "./db";
import { associations } from "./relations";

export const connectDB = async () => {    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await associations()
        console.log('Associations has been created successfully.');

        await sequelize.sync({ force: true, logging: false })
        console.log('Tables created in the database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}