import { body } from 'express-validator';

// Regex pour la validation du numéro de salle
const numeroSalleRegex = /^[A-Za-z0-9\-]{1,10}$/; // Exemple : permet les lettres, chiffres et tirets, avec une longueur maximale de 10 caractères.

// Validation pour `salleConsultation`
const salleConsultationRules = [
    body('numero_S')
        .matches(numeroSalleRegex)
        .withMessage("Le numéro de la salle doit comporter entre 1 et 10 caractères, incluant des lettres, chiffres et tirets."),
    
    body('etage_S')
        .notEmpty()
        .withMessage("L'étage de la salle ne peut pas être vide"),

    body('capacite_S')
        .isInt({ min: 1 })
        .withMessage("La capacité de la salle doit être un nombre entier supérieur à 0"),

    body('dispon_S')
        .notEmpty()
        .withMessage("La disponibilité de la salle ne peut pas être vide")
];

export default salleConsultationRules;
