import { execute } from "../services/mysql.connector";
import { Color } from "./colors.model";
import { colorQueries } from './colors.queries';

export const readColors = async () => {
    return execute<Color[]>(colorQueries.readColors, []);
};