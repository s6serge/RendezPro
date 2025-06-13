import express from "express";
//import {Router} from "express"

import patientRules from "../validations/patientValidation.js";


import { 
    patientList,
    createPatient,
    deletePatient,
    updatePatient,
    searchPatient,
    searchPatientByNameOrEmail
     
} from "../controller/patientController.js";

const router = express.Router();

router.get("/", patientList);  // Get all doctors
router.post("/", patientRules, createPatient);  // Create a new doctor
router.delete("/:id", deletePatient);  // Delete a doctor by ID
router.put("/:id", updatePatient);  // Update a doctor by ID
router.get("/:id", searchPatient);  // Search for a doctor by ID
router.get("/search", searchPatientByNameOrEmail);  // Search doctors by name or specialty

export default router;
