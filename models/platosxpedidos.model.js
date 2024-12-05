import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";
import { Pedidos } from "./pedidos.model.js";

export class PlatosxPedidos extends Model {}

PlatosxPedidos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.INTEGER,
        },
        PedidoId: {
            type: DataTypes.INTEGER,
        },
        platoId: {
            type: DataTypes.INTEGER,
        }
       
    },
    {
        sequelize,
        modelName: "pltosxpedidos",
        timestamps: false,
    }
);


