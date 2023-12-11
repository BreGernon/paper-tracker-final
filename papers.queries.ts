export const paperQueries = {
    readPapers:`
    SELECT 
        paperId as paperId, weight AS weight, color AS color, 
    quantity AS quantity, price AS price, cost AS cost, 
    width AS width, length AS length, inStore AS inStore 
    FROM papers
    `,
    readPapersByColor:`
    SELECT 
        paperid as paperId, weight AS weight, color AS color, 
    quantity AS quantity, price AS price, cost AS cost,
    width AS width, length AS length, inStore AS inStore  
    FROM papers
    WHERE papers.color = ?
    `,
    readPapersByColorSearch:`
    SELECT 
        paperid as paperId, weight AS weight, color AS color, 
    quantity AS quantity, price AS price, cost AS cost,
    width AS width, length AS length, inStore AS inStore   
    FROM papers
    WHERE papers.color LIKE ?
    `,
    readPapersByWeightSearch:`
    SELECT 
        paperid as paperId, weight AS weight, color AS color, 
    quantity AS quantity, price AS price, cost AS cost,
    width AS width, length AS length, inStore AS inStore   
    FROM papers
    WHERE papers.cost LIKE ?
    `,
    readPapersByPaperId:`
    SELECT 
        paperid as paperId, weight AS weight, color AS color, 
    quantity AS quantity, price AS price, cost AS cost,
    width AS width, length AS length, inStore AS inStore   
    FROM papers
    WHERE papers.paperid = ?
    `,
    createPaper:`
        INSERT INTO papers(weight, color, quantity, price, cost, width, length, inStore) VALUES (?,?,?,?,?,?,?,?)
    `,
    updatePaper:`
        UPDATE papers SET id= ?,weight=?,color=?,quantity=?,price=?,cost=?,width=?,length=?,inStore=?
        WHERE paperid = ?
    `,
    deletePaper:`
        DELETE FROM papers 
        WHERE paperid = ?
    `,

}