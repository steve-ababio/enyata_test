import pg from "pg";
const {Pool} = pg;

let pool:pg.Pool|null = null ;

export async function createDatabaseConnection(){
    pool = new Pool({
        user:process.env.PG_USER,
        host:process.env.PG_HOST,
        database:process.env.PG_DATABASE,
        password:process.env.PG_PASSWORD,
        port:parseInt(process.env.PG_PORT!),
    });
    try{
        await pool.connect();
    }catch(error){
        throw error
    }
    pool.query( `CREATE TABLE IF NOT EXISTS incidents 
        (
            id serial PRIMARY KEY,
            client_id INTEGER NOT NULL,
            incident_desc VARCHAR(70) NOT NULL,
            city VARCHAR(70) NOT NULL,
            country VARCHAR(70) NOT NULL,
            date DATE NOT NULL DEFAULT CURRENT_DATE,
            weather JSON NOT NULL
        )
    `);
    console.log("database successfully connected");
}
export function getPool(){
    return pool;
}
