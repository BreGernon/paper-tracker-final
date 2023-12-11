import { Router } from "express";
import  * as ColorsController from './colors.controller';


const router = Router();
router
    .route('/colors')
    .get(ColorsController.readColors);

    export default router;