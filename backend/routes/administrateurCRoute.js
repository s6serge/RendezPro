//Importer la fonction Router pour la creation des routes
import {Router } from "express"

//Importer la fonction pour charger les images/fichiers
//import upload from "../helpers/fileLoader.js";

// Importation de la fonction `verifierToken` qui sert à vérifier l'authenticité 
// du jeton d'accès (token) envoyé par l'utilisateur dans la requête HTTP. 
import { verifierToken } from "../autorisation/verifierToken.js";


// Importation de la fonction `autoriser`, qui est une fonction middleware permettant
// de restreindre l'accès à certaines routes en fonction des rôles des utilisateurs.
import autoriser from "../autorisation/autorisation.js";

import express from "express";

//Importer les controllers
import { 
    administrateurList, 
    addAdmin, 
    deleteAdmin, 
    updateAdmin, 
    searchAdministrateur 
} from "../controller/administrateurCController.js";

import { login } from "../autorisation/login.js";

// Creation d"une instance de Router
const router = express.Router();


//Proteger toutes les routes ci-dessous
router.all("*",verifierToken) 
router.get('/:id', searchAdministrateur )  // Recherche d'un administrateur


// Routes for Administrateurs
router.get("/", administrateurList);  // Liste des administrateurs
router.post("/", addAdmin);  // Créer un administrateur
router.delete("/:id", deleteAdmin);  // Supprimer un administrateur
router.put("/:id", updateAdmin);  // Modifier un administrateur



//Route pour le loggin
//router.post('/login', login)

export default router;





