import { FinalIncidentReport } from "../entities/entities";
export interface IGenericStore<T>{
    find<T>(filter?:any):Promise<T[]>,
    save(items:FinalIncidentReport):Promise<boolean>
}