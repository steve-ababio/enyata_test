import {Request,Response,NextFunction} from "express";
import {constants} from "http2";
import { getPool } from "../data/config/database.js";
import { PostgresDataService } from "../data/services/postgres.dataservice.js";
import { PostgresStore } from "../data/repository/postgres.repository.js";
import { IncidentReport } from '../entities/entities.js';
import { IncidentReportService } from "../logic/incident.js";
import { fetchWeatherReport } from "../utils/fetchweatherreport.js";
import { ValidateReport } from "../utils/validate.js";

const {HTTP_STATUS_CREATED,HTTP_STATUS_BAD_REQUEST} = constants;

export default async function IncidentReportHandler(req:Request,res:Response,next:NextFunction){        
    const isReportValid = ValidateReport(req.body);
    if(!isReportValid){
        return res.status(HTTP_STATUS_BAD_REQUEST).json({message:"Request is ill-formed"});
    }   
    const incidentReport:IncidentReport = req.body;    
    let weather_report:any;
    try{                
        weather_report = await fetchWeatherReport(`https://api.openweathermap.org/data/2.5/weather?q=${incidentReport.city}&appid=${process.env.OWM_API_KEY}`);
    }catch(error){
        next(error);
    }    
    let date = new Date();
    const finalIncidentReport = {
        ...incidentReport,
        date,
        weather_report,       
    };
    const pool = getPool();
    const incidentservice = new IncidentReportService(new PostgresDataService(new PostgresStore(pool!)));
    try{
        const saved = await incidentservice.saveIncidents(finalIncidentReport); 
        if (!saved)
            throw new Error("hello Internal server error,Something went wrong...")
        return  res.status(HTTP_STATUS_CREATED).json({message:"Incident report submitted has been saved"})  
    }catch(error){
        next(new Error("Internal server error,Something went wrong..."));
    }       
}



