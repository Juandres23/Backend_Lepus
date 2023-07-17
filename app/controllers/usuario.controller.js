import { pool } from "../config/database/db";
import message from "../config/message";


// INGRESAR DATOS
export const createUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const nombre = req.body.nombre; 
        const apellido = req.body.apellido;
        const email = req.body.email;
        const telefono = req.body.telefono;
        const direccion = req.body.direccion;
        const fecha_registro = req.body.fecha_registro;
        const id_rol = req.body.id_rol;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const contrasena = req.body.contrasena;
        const genero = req.body.genero;
        const result = await pool.query(`CALL spInsertUsuario('${id_usuario}','${nombre}', '${apellido}', '${email}', '${telefono}', '${direccion}', '${fecha_registro}', ${id_rol}, '${fecha_nacimiento}', '${contrasena}', '${genero}');`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR TODOS LOS DATOS
export const findAllUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query(`CALL spFindAllUsuario`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// MOSTRAR DATOS POR ID
export const findOneUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query(`CALL spFindUsuario (${id_usuario});`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

export const pingUsuario = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// ACTUALIZAR
export const UpdateUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const nombre = req.body.nombre; 
        const apellido = req.body.apellido;
        const email = req.body.email;
        const telefono = req.body.telefono;
        const direccion = req.body.direccion;
        const fecha_registro = req.body.fecha_registro;
        const id_rol = req.body.id_rol;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const contrasena = req.body.contrasena;
        const genero = req.body.genero;
        const result = await pool.query(`CALL spUpdateUsuario('${id_usuario}','${nombre}', '${apellido}', '${email}', '${telefono}', '${direccion}', '${fecha_registro}', '${id_rol}', '${fecha_nacimiento}', '${contrasena}', '${genero}');`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};

// Eliminar por ID
export const deleteUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const result = await pool.query(`CALL spDeleteUsuario  ${id_usuario});`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};
