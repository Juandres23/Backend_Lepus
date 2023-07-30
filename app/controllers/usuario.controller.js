import { pool } from "../config/database/db";
import message from "../config/message";


// INGRESAR DATOS
export const createUsuario = async (req, res) => {
    try {
        const id_usuario = req.body.id_usuario;
        const nombre = req.body.nombre; 
        const apellido = req.body.apellido;
        const email = req.body.email;
        const telefono = req.body.telefono;
        const direccion = req.body.direccion;
        const id_rol = req.body.id_rol;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const contrasena = req.body.contrasena;
        const genero = req.body.genero;
        const result = await pool.query(`CALL spInsertUsuario('${id_usuario}','${nombre}', '${apellido}', '${email}', '${telefono}', '${direccion}', ${id_rol}, '${fecha_nacimiento}', '${contrasena}', '${genero}');`);
        res.json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: error.message });
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
        const id_rol = req.body.id_rol;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const contrasena = req.body.contrasena;
        const genero = req.body.genero;
        const result = await pool.query(`CALL spUpdateUsuario('${id_usuario}','${nombre}', '${apellido}', '${email}', '${telefono}', '${direccion}', '${id_rol}', '${fecha_nacimiento}', '${contrasena}', '${genero}');`);
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

// INICIO DE SESIÓN
export const loginUsuario = async (req, res) => {
    try {
        const email = req.body.email;
        const contrasena = req.body.contrasena;
        const id_rol = req.body.id_rol;

        // Realizar una consulta a la base de datos para verificar las credenciales del usuario
        const [result] = await pool.query(`CALL spLoginUsuario('${email}', '${contrasena}', ${id_rol};`);

        // Verificar si se encontró un usuario con las credenciales proporcionadas
        if (result && result.length > 0) {
            // Iniciar sesión o generar un token de autenticación
            // Por ejemplo, podrías almacenar el usuario en la sesión req.session.user = { email, id_rol };
            res.json({ success: true, message: "Inicio de sesión exitoso", user: { email, id_rol } });
        } else {
            res.status(401).json({ success: false, message: "Credenciales inválidas" });
        }
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
};
