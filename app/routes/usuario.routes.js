import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller";
const router = Router();


router.post('/', usuarioController.createUsuario);

router.get('/AllUsuario', usuarioController.findAllUsuario);

router.get('/ping', usuarioController.pingUsuario);

router.get('/:id_usuario', usuarioController.findOneUsuario);

router.put('/:id_usuario', usuarioController.UpdateUsuario);

router.delete('/:id_usuario', usuarioController.deleteUsuario);

export default router;