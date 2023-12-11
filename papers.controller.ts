import { Request, RequestHandler, Response } from 'express';
import { Paper } from './papers.model';
import * as PaperDao from './papers.dao';
import { OkPacket } from 'mysql';

export const readPapers: RequestHandler = async (req: Request, res: Response) => {
    try {
        let papers;
        let paperId = parseInt(req.query.paperId as string);

        console.log('paperId', paperId);
        if (Number.isNaN(paperId)) {
            papers = await PaperDao.readPapers();
        } else {
            papers = await PaperDao.readPapersByPaperId(paperId);
        }

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching papers'
        });
    }
};

export const readPapersByColor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const papers = await PaperDao.readPapersByColor(req.params.color);

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching papers'
        });
    }
};

export const readPapersByColorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const papers = await PaperDao.readPapersByColorSearch('%' + req.params.search + '%');

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching papers'
        });
    }
};

export const readPapersByWeightSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const papers = await PaperDao.readPapersByWeightSearch('%' + req.params.search + '%');

        res.status(200).json(
            papers
        );
    } catch (error) {
        console.error('[papers.controller][readPapers][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching papers'
        });
    }
};

export const createPaper: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PaperDao.createPaper(req.body);

        console.log('req.body', req.body);

        console.log('paper', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[papers.controller][createPaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing papers'
        });
    }
};

export const updatePaper: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PaperDao.updatePaper(req.body);
        
        console.log('req.body', req.body);

        console.log('paper', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[papers.controller][updatePaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating papers'
        });
    }
};

export const deletePaper: RequestHandler = async (req: Request, res: Response) => {
    try {
        let paperId = parseInt(req.params.paperId as string);

        console.log('paperId', paperId);
        if (!Number.isNaN(paperId)) {
            const response = await PaperDao.deletePaper(paperId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for paperId");
        }

    } catch (error) {
        console.error('[papers.controller][deletePaper][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting papers'
        });
    }
};