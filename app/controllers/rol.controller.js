import { pool } from "../config/database/db";
import message from "../config/message";


// INGRESAR DATOS
export const createRol = async (req, res) => {
    try {
        const id_rol = req.params.id_rol;
        const nombre = req.body.nombre; 
        const estado = req.body.estado;
        const result = await pool.query(`CALL spInsertRol('${id_rol}', '${nombre}', '${estado}');`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR TODOS LOS DATOS

export const findAllRol = async (req, res) => {
    try {
        const [rows] = await pool.query(`CALL spFindAllRol`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR DATOS POR ID

export const findOneRol = async (req, res) => {
    try {
        const id_rol = req.params.id_rol;
        const [result] = await pool.query(`CALL spFindRol (${id_rol});`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

export const pingRol = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

// ACTUALIZAR
export const UpdateRol = async (req, res) => {
    try {
        const id_rol = req.params.id_rol;
        const nombre = req.body.nombre; 
        const estado = req.body.estado;
        const result = await pool.query(`CALL spUpdateRol (${id_rol}, '${nombre}', '${estado}');`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// Eliminar por ID
export const deleteRol = async (req, res) => {
    try{
        const id_rol = req.params.id_rol;
        const result = await pool.query(`CALL spDeleteRol (${id_rol});`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
