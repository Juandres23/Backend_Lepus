import { pool } from "../config/database/db";
import message from "../config/message";


// INGRESAR DATOS
export const createPortafolio = async (req, res) => {
    try {
        const id_proyecto = req.params.id_proyecto;
        const nombre_proyecto = req.body.nombre_proyecto; 
        const descripcion = req.body.descripcion;
        const imagen_url = req.body.imagen_url;
        const categoria_proyecto = req.body.categoria_proyecto;
        const result = await pool.query(`CALL spInsertPortafolio ('${id_proyecto}', '${nombre_proyecto}', '${descripcion}', '${imagen_url}', '${categoria_proyecto}');`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR TODOS LOS DATOS

export const findAllPortafolio = async (req, res) => {
    try {
        const [rows] = await pool.query(`CALL spFindAllPortafolio`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR DATOS POR ID
export const findOnePortafolio = async (req, res) => {
    try {
        const id_proyecto = req.params.id_proyecto;
        const [result] = await pool.query(`CALL spFindPortafolio (${id_proyecto});`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

export const pingPortafolio = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// ACTUALIZAR
export const UpdatePortafolio = async (req, res) => {
    try {
        const id_proyecto = req.params.id_proyecto;
        const nombre_proyecto = req.body.nombre_proyecto; 
        const descripcion = req.body.descripcion;
        const imagen_url = req.body.imagen_url;
        const categoria_proyecto = req.body.categoria_proyecto;
        const result = await pool.query(`CALL spUpdatePortafolio ('${id_proyecto}', '${nombre_proyecto}', '${descripcion}', '${imagen_url}', '${categoria_proyecto}');`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// Eliminar por ID
export const deletePortafolio = async (req, res) => {
    try{
        const id_proyecto = req.params.id_proyecto;
        const result = await pool.query(`CALL spDeletePortafolio (${id_proyecto});`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
