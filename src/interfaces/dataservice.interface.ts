import { FinalIncidentReport } from '../entities/entities';
import { IGenericStore } from './genericrepo.interface';

export interface IDataService{
    _incidentreport:IGenericStore<FinalIncidentReport>;
}