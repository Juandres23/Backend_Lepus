import express from "express";
import morgan from "morgan";
import enviroments from "./config/enviroments";
import AllroutesUsuario from "./routes/usuario.routes.js";
import AllroutesRol from "./routes/rol.routes.js";
import AllroutesEmpresa from "./routes/empresa.routes.js";
import AllroutesPortafolio from "./routes/portafolio.routes.js";

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Lepus'});
});

//settings
app.set("PORT", process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));

app.use(express.json());

app.use('/api', AllroutesUsuario);
app.use('/apiRol', AllroutesRol);
app.use('/apiEmpresa', AllroutesEmpresa);
app.use('/apiPortafolio', AllroutesPortafolio);

export default app;