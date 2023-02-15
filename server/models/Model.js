// importamos la conexion a la base de datos
import db from "../database/db.js"
//importamos sequelize
import { DataTypes } from "sequelize";

export const FilesModel = db.define('files',{
    nombre : {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    id_categoria: {type: DataTypes.INTEGER},
    archivo: {type: DataTypes.STRING}
});

