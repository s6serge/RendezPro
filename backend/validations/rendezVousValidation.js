import { body } from "express-validator";

// Regex pour la validation de l'heure du rendez-vous (format HH:MM:SS)
const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;

// Règles de validation pour un rendez-vous
const rendezVousRules = [
    body('date').isDate().withMessage("La date doit être valide") // Vérifie que la date est au format correct
        .custom(value => {
            const today = new Date();
            const rendezVousDate = new Date(value);
            if (rendezVousDate < today) {
                throw new Error("La date du rendez-vous ne peut pas être dans le passé.");
            }
            return true;
        }),

    body('heure').matches(timeRegex).withMessage("L'heure du rendez-vous doit être au format HH:MM (ex: 14:30)"), // Vérifie le format de l'heure
    body('motif').optional().isLength({ min: 5 }).withMessage("Le motif doit comporter au moins 5 caractères"), // Le motif est optionnel mais s'il est fourni, il doit avoir au moins 5 caractères
    body('status').isIn(['en attente', 'confirmé', 'annulé', 'en cours']).withMessage("Le statut doit être 'en attente', 'confirmé', 'annulé' ou 'en cours'") // Vérifie que le statut est valide
];

export default rendezVousRules;
