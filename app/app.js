import express from "express";
import http from 'http';
import cors from "cors";
import { Server } from 'socket.io';
import morgan from "morgan";
import enviroments from "./config/enviroments";
import usuarioRouter from "./routes/usuario.routes.js";
import AllroutesRol from "./routes/rol.routes.js";
import AllroutesEmpresa from "./routes/empresa.routes.js";
import AllroutesPortafolio from "./routes/portafolio.routes.js";


const app = express();
const server = http.createServer(app);

// Configura Socket.io
const io = new Server(server);

// Configurar CORS para permitir solicitudes desde el frontend en http://localhost:2000
app.use(cors({
    origin: 'http://localhost:2000',
  }));

  // Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});





//Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Lepus'});
});

//settings
app.set("PORT", process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));

app.use(express.json());

app.use('/api', usuarioRouter);
app.use('/apiRol', AllroutesRol);
app.use('/apiEmpresa', AllroutesEmpresa);
app.use('/apiPortafolio', AllroutesPortafolio);

export default app;