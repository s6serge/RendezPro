import express from 'express';

import serviceMedicalRules from '../validations/serviceValidation.js';

import {
    getAllServices,
    createServiceMedical,
    deleteServiceMedical,
    updateServiceMedical,
    searchServices
} from '../controller/serviceMedicalController.js'

const router = express.Router();

// 1. Route pour lister tous les services médicaux
router.get('/', getAllServices);

// 2. Route pour créer un nouveau service médical
router.post('/', serviceMedicalRules, createServiceMedical);

// 3. Route pour supprimer un service médical par son ID
router.delete('/:id', deleteServiceMedical);

// 4. Route pour modifier un service médical par son ID
router.put('/:id', updateServiceMedical);

// 5. Route pour rechercher des services médicaux par nom
router.get('/servSearch', searchServices);

// Exportation des routes
export default router;