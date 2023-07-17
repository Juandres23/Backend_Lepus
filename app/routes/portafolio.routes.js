import { Router } from "express";
import * as portafolioController from "../controllers/portafolio.controller";
const router = Router();


router.post('/', portafolioController.createPortafolio);

router.get('/', portafolioController.findAllPortafolio);

router.get('/ping', portafolioController.pingPortafolio);

router.get('/:id_proyecto', portafolioController.findOnePortafolio);

router.put('/:id_proyecto', portafolioController.UpdatePortafolio);

router.delete('/:id_proyecto', portafolioController.deletePortafolio);

export default router;