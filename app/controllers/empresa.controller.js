import { pool } from "../config/database/db";
import message from "../config/message";


// INGRESAR DATOS
export const createEmpresa = async (req, res) => {
    try {
        const id_empresa = req.body.id_empresa;
        const nombre_empresa = req.body.nombre_empresa;
        const direccion = req.body.direccion;
        const ciudad = req.body.ciudad;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const correo_electronico = req.body.correo_electronico;
        const fecha_registro = req.body.fecha_registro;
        const contrasena = req.body.contrasena;
        const result = await pool.query(`CALL spInsertEmpresa('${id_empresa}','${nombre_empresa}', '${direccion}', '${ciudad}', '${pais}', '${telefono}', '${correo_electronico}', '${fecha_registro}', '${contrasena}');`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR TODOS LOS DATOS

export const findAllEmpresa = async (req, res) => {
    try {
        const [rows] = await pool.query(`CALL spFindAllEmpresa();`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR DATOS POR ID
export const findOneEmpresa = async (req, res) => {
    try {
        const id_empresa = req.params.id_empresa;
        const [result] = await pool.query(`CALL spFindEmpresa(${id_empresa});`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

export const pingEmpresa = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// ACTUALIZAR
export const UpdateEmpresa = async (req, res) => {
    try {
        const id_empresa = req.params.id_empresa;
        const nombre_empresa = req.body.nombre_empresa; 
        const direccion = req.body.direccion;
        const ciudad = req.body.ciudad;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const correo_electronico = req.body.correo_electronico;
        const fecha_registro = req.body.fecha_registro;
        const contrasena = req.body.contrasena;
        const result = await pool.query(`CALL spUpdateEmpresa (${id_empresa}, '${nombre_empresa}', '${direccion}', '${ciudad}', '${pais}', '${telefono}', '${correo_electronico}', '${fecha_registro}', '${contrasena}');`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};


// Eliminar por ID
export const deleteEmpresa = async (req, res) => {
    try{
        const id_empresa = req.params.id_empresa;
        const result = await pool.query(`CALL spDeleteEmpresa (${id_empresa});`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

