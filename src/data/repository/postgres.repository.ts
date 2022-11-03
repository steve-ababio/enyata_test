import { FinalIncidentReport } from "../../entities/entities";
import { IGenericStore } from "../../interfaces/genericrepo.interface";
import {Pool, QueryResult} from "pg";

export class PostgresStore<T> implements IGenericStore<T>{
    private _pool:Pool|null = null;

    constructor(pool:Pool){
        this._pool = pool;;
    }
    async find<T>(filter?: any):Promise<T[]> {
        let incidentreport:QueryResult;
        incidentreport = await this._pool!.query("SELECT * FROM incidents");
        console.log(incidentreport.rows as T[]);
        return  incidentreport.rows as T[];
    }
    async save(items: FinalIncidentReport): Promise<boolean> {   
        let result;     
        result = await this._pool!.query("INSERT INTO incidents (client_id,incident_desc,city,country,date,weather) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",[items.client_id,items.incident_desc,items.city,items.country,items.date,JSON.stringify(items.weather_report)]);    
        return result !== null; 
    }
} 