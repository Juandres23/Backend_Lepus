import  { Router } from "express";
import * as rolController from "../controllers/rol.controller";
const router = Router();


router.post('/', rolController.createRol);

router.get('/', rolController.findAllRol);

router.get('/ping', rolController.pingRol);

router.get('/:id_rol', rolController.findOneRol);

router.put('/:id_rol', rolController.UpdateRol);

router.delete('/:id_rol', rolController.deleteRol);

export default router;