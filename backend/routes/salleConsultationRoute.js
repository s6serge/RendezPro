//import{Router} from "express"
import express from "express";

import salleConsultationRules from "../validations/SalleValidation.js";

import { salleConsultationList, 
    createSalleConsultation, 
    deleteSalleConsultation, 
    updateSalleConsultation, 
    searchSalleConsultation, 
    searchSalleConsultationByNumberOrFloor
 } from "../controller/salleConsultationController.js";

const router = express.Router();

// Routes
router.get("/", salleConsultationList);  // Get all consultation rooms
router.post("/", salleConsultationRules, createSalleConsultation);  // Create a new consultation room
router.delete("/:id", deleteSalleConsultation);  // Delete a consultation room by ID
router.put("/:id", updateSalleConsultation);  // Update a consultation room by ID
router.get("/:id", searchSalleConsultation);  // Search for a consultation room by ID
router.get("/search", searchSalleConsultationByNumberOrFloor);  // Search consultation rooms by number or floor

export default router;
