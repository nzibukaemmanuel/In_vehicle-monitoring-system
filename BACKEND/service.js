import db from "./db/db.js";
import { Parser } from 'json2csv';


export const getPassengers = async () => { 
    const query = "SELECT * FROM passenger";
    try {
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        console.error("Error fetching passengers:", error);
        throw error;
    }
}

const getMessage = () => {
  return "Hello from the backend!";
}

export const exportCsv = async () =>{
    const query = "SELECT * FROM passenger";
    try {
        const result = await db.query(query);
        const csvFields = ["id", "email", "firstname"]
        const opts = { fields: csvFields };
        const parser = new Parser(opts);
        const csv = parser.parse(result.rows);
        return csv;
    } catch (error) {
        console.error("Error fetching passengers:", error);
        throw error;
    }
}