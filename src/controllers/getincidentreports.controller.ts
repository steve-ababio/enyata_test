import {Request,Response,NextFunction} from "express";
import { IncidentReportService } from "../logic/incident.js";
import { getPool } from "../data/config/database.js";
import { PostgresDataService } from "../data/services/postgres.dataservice.js";
import { PostgresStore } from "../data/repository/postgres.repository.js";
import {constants} from "http2";

const {HTTP_STATUS_ACCEPTED} = constants;

export default async function FetchAllIncidentReportsHandler(req:Request,res:Response,next:NextFunction){ 
    const pool = getPool();
    const incidentservice = new IncidentReportService(new PostgresDataService(new PostgresStore(pool!)));
    try{
        const allincidents =  await incidentservice.getAllIncidents();
        return res.status(HTTP_STATUS_ACCEPTED).json({incident_report:allincidents});
    }catch(error){
        next(new Error("Internal server error,Something went wrong..."));
    }
}
