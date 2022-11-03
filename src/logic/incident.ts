import { FinalIncidentReport } from "../entities/entities";
import { IDataService } from "../interfaces/dataservice.interface";

export class IncidentReportService{
    private _dataservice:IDataService;
    constructor(dataservice:IDataService){
        this._dataservice = dataservice;
    }
    saveIncidents(incidents:FinalIncidentReport){
        return this._dataservice._incidentreport.save(incidents);
    }
    getAllIncidents(){
        return this._dataservice._incidentreport.find();
    }
} 