import { FinalIncidentReport} from "../../entities/entities";
import { IDataService } from "../../interfaces/dataservice.interface";
import { IGenericStore } from "../../interfaces/genericrepo.interface";

export class PostgresDataService implements IDataService{
    _incidentreport: IGenericStore<FinalIncidentReport>;
    constructor(incidentreport:IGenericStore<FinalIncidentReport>){
        this._incidentreport = incidentreport;
    }
}
