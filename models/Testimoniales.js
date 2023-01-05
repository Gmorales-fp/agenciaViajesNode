import  Sequelize  from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales',{ //nombre de la tabla, columnas de la tabla
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
});