import { Router } from 'express';
import * as PapersController from  './papers.controller';

const router = Router();
router
    .route('/papers')
    .get(PapersController.readPapers);

router
    .route('/papers/:color')
    .get(PapersController.readPapersByColor);

router
    .route('/papers/search/color/:search')
    .get(PapersController.readPapersByColorSearch);

router
    .route('/papers/search/weight/:search')
    .get(PapersController.readPapersByWeightSearch);

router
    .route('/papers')
    .post(PapersController.createPaper);

router
    .route('/papers')
    .put(PapersController.updatePaper);

router
    .route('/papers/:paperId')
    .delete(PapersController.deletePaper);
    
export default router;