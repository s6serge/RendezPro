

//import{Router} from "express"
import express from "express";
import { 
    servMedDocteurList, 
     
    deleteServMedDocteur, 
    
    searchServMedDocteur 
} from "../controller/servMedDocteurController.js";

const router = express.Router();

// Routes
router.get("/", servMedDocteurList);  // Liste de toutes les relations service médical pour docteurs
//router.post("/", createServMedDocteur);  // Créer une nouvelle relation service médical pour un docteur
router.delete("/:id", deleteServMedDocteur);  // Supprimer une relation service médical pour un docteur
//router.put("/:id", updateServMedDocteur);  // Modifier une relation service médical pour un docteur
router.get("/:id", searchServMedDocteur);  // Rechercher une relation service médical pour un docteur

export default router
