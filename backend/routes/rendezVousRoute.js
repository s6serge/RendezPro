//import{Router} from "express"

import express from "express"
import rendezVousRules from "../validations/rendezVousValidation.js";

import { 
    rendezVousList, 
    createRendezVous, 
    deleteRendezVous, 
    updateRendezVous, 
    searchRendezVous 
} from "../controller/rendezVousController.js";

const router = express.Router();

// Routes
router.get("/rendezVous", rendezVousList);  // Liste des rendez-vous
router.post("/", rendezVousRules, createRendezVous);  // Créer un rendez-vous
router.delete("/:id", deleteRendezVous);  // Supprimer un rendez-vous
router.put("/:id", updateRendezVous);  // Modifier un rendez-vous
router.get("/:id", searchRendezVous);  // Recherche d'un rendez-vous

export default router;
