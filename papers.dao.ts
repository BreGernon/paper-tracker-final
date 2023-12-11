import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Paper } from './papers.model';
import { paperQueries } from './papers.queries';

export const readPapers = async () => {
    return execute<Paper[]>(paperQueries.readPapers, []);
};

export const readPapersByColor = async (colorName: string) => {
    return execute<Paper[]>(paperQueries.readPapersByColor, [colorName]);
};

export const readPapersByColorSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Paper[]>(paperQueries.readPapersByColorSearch, [search]);
};

export const readPapersByWeightSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Paper[]>(paperQueries.readPapersByWeightSearch, [search]);
};

export const readPapersByPaperId = async (paperId: number) => {
    return execute<Paper[]>(paperQueries.readPapersByPaperId, [paperId]);
};

export const createPaper = async (paper: Paper) => {
    return execute<OkPacket>(paperQueries.createPaper, 
        [paper.weight, paper.color, paper.quantity, paper.price, paper.cost, paper.width, paper.length, paper.inStore]);
};

export const updatePaper = async (paper: Paper) => {
    return execute<OkPacket>(paperQueries.updatePaper, 
        [paper.weight, paper.color, paper.price, paper.cost, paper.quantity, paper.paperId, paper.width, paper.length, paper.inStore]);
};

export const deletePaper = async (paperId: number) => {
    return execute<OkPacket>(paperQueries.deletePaper, [paperId]);
};
