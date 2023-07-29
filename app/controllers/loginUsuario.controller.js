// Importar el pool y el módulo de mensajes si es necesario
// import { pool } from "../config/database/db";
// import message from "../config/message";

// INICIO DE SESIÓN
export const loginUsuario = async (req, res) => {
    try {
        const email = req.body.email;
        const contrasena = req.body.contrasena;
        
        // Realizar una consulta a la base de datos para verificar las credenciales del usuario
        const [result] = await pool.query(`CALL spFindUsuarioByCredentials('${email}', '${contrasena}');`);
        
        // Verificar si se encontró un usuario con las credenciales proporcionadas
        if (result && result.length > 0) {
            // Iniciar sesión o generar un token de autenticación
            // Por ejemplo, podrías almacenar el usuario en la sesión req.session.user = result[0];
            res.json({ success: true, message: "Inicio de sesión exitoso", user: result[0] });
        } else {
            res.status(401).json({ success: false, message: "Credenciales inválidas" });
        }
    } catch (error) {
        // message(error.message, "danger");
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};
