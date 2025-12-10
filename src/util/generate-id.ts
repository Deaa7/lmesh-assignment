import { v4 as uuidv4 } from "uuid";

export function generateId() : string { 
     
    // human readable id
    const uniqueId = uuidv4().replace(/-/g, "").substring(0, 10);
    return uniqueId;

}