import multer from "multer";
//import express from "express";
import {Router} from "express"

//Importer la fonction pour charger les images/fichiers
import upload from "../helpers/fileLoader.js";
//import { verifierToken } from "../autorisation/verifierToken.js";

import docteurRules from "../validations/docteurValidation.js";

import { docteurList, createDocteur, deleteDocteur, updateDocteur, searchDocteur, searchDocteurByNameOrSpeciality } from "../controller/docteurController.js";



const router = Router();
   
//router.all("*",verifierToken)  //Proteger toutes les routes ci-dessous

router.post('/', upload.single('photo'), docteurRules, createDocteur) // Create a new doctor
router.get("/", docteurList);  // Get all doctors
 
router.delete("/:id", deleteDocteur);  // Delete a doctor by ID
router.put("/:id", updateDocteur);  // Update a doctor by ID
router.get("/:id", searchDocteur);  // Search for a doctor by ID
router.get("/doctSearchSp", searchDocteurByNameOrSpeciality);  // Search doctors by name or specialty

export default router;



