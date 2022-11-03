export function ValidateReport(incidentreport:any){
    return (
            incidentreport !== null &&
            typeof incidentreport === "object" &&
            typeof incidentreport.client_id === "number" &&
            typeof incidentreport.incident_desc === "string" &&
            typeof incidentreport.city === "string" &&
            typeof incidentreport.country === "string"
    ) 
}