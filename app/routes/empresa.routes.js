import { Router } from "express";
import * as empresaController from "../controllers/empresa.controller";
const router = Router();


router.post('/', empresaController.createEmpresa);

router.get('/', empresaController.findAllEmpresa);

router.get('/ping', empresaController.pingEmpresa);

router.get('/:id_empresa', empresaController.findOneEmpresa);

router.put('/:id_empresa', empresaController.UpdateEmpresa);

router.delete('/:id_empresa', empresaController.deleteEmpresa);

export default router;