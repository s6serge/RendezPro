import { body } from 'express-validator';

// Regex pour le nom du service médical (au moins 4 caractères alphanumériques et espaces autorisés)
const serviceNameRegex = /^[a-zA-Z0-9\s]{4,}$/;

// Regex pour la description du service médical (doit avoir au moins 5 caractères)
const descriptionRegex = /^[a-zA-Z0-9\s,.'-]{5,}$/;

const serviceMedicalRules = [
    body('nom_S')
        .matches(serviceNameRegex)
        .withMessage("Le nom du service doit comporter au moins 4 caractères et ne peut contenir que des lettres, chiffres et espaces"),

    body('description_S')
        .matches(descriptionRegex)
        .withMessage("La description du service doit comporter au moins 5 caractères et peut inclure des lettres, chiffres, espaces et ponctuations (comme des virgules, des apostrophes, etc.)")
];

export default serviceMedicalRules;
