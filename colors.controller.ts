import { Request, RequestHandler, Response } from "express";
import * as ColorDao from './colors.dao';




export const readColors: RequestHandler  = async (req: Request, res: Response) => {
    try {
        const colors = await ColorDao.readColors();

        res.status(200).json(
            colors
        );
    } catch (error) {
        console.error('[colors.controller][ReadColors][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching colors'
        });
    }
};