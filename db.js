import "dotenv/config";

export const config = {
    url: "postgresql://Burgertic_owner:EOYSXm50byvz@ep-fancy-night-a5d23gyx.us-east-2.aws.neon.tech/Burgertic?sslmode=require",
    user: "Lautaro", // Tu usuario de base de datos
    host: "ep-broad-sun-a5d23gyx.us-east-2.aws.neon.tech", // El host de la base de datos
    database: "Burgertic", // El nombre de tu base de datos
    password: "EOYSXm50byvz", // La contraseña de tu base de datos
    port: 5432, // El puerto de PostgreSQL (por defecto es 5432)
    ssl: true, // SSL habilitado para conexiones seguras
};


import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    config.url
);

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
