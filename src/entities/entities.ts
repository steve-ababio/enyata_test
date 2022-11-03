export interface IncidentReport{
    client_id:number,
    incident_desc:string,
    city:string, 
    country:string,    
}
export interface FinalIncidentReport extends IncidentReport {
    id?:string
    date:Date|null,
    weather_report:object, 
}
