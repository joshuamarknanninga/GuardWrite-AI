import { Router } from "express";
import { createReport, getReports } from "../controllers/reportController.js";

const router = Router();

router.get("/", getReports);
router.post("/", createReport);

export default router;
