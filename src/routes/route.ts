import {Router} from "express";
import IncidentReportHandler from "../controllers/saveincidentreport.controller.js";
import FetchAllIncidentReportsHandler from "../controllers/getincidentreports.controller.js";

export function Routes(){
    const router = Router();
    router.post("/api/incidentreport",IncidentReportHandler);
    router.get("/api/allincidentreports",FetchAllIncidentReportsHandler);
    return router;
}


