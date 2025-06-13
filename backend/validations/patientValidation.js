import { body, check, param } from "express-validator";


// Regex pour le nom et prénom
const nameRegex = /^[a-zA-Z]{4,}$/; // Le nom et prénom doivent être d'au moins 4 lettres

// Regex pour la validation de l'email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regex pour la validation du numéro de téléphone
const phoneRegex = /^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;


const patientRules = [
    body('nom_P').matches(nameRegex).withMessage("Le nom n'est pas conforme"),
    body('prenom_P').matches(nameRegex).withMessage("Le prénom n'est pas conforme"),
    body('date_Nais_P').isDate().withMessage("La date de naissance doit être valide")
        .custom(value => {
            const today = new Date();
            const userDate = new Date(value);
            if (userDate > today) {
                throw new Error("La date de naissance ne peut pas être dans le futur.");
            }
            return true;
        }),
    body('adresse_P').isLength({ min: 5 }).withMessage("L'adresse doit comporter au moins 5 caractères"),
    body('num_Tel_P').matches(phoneRegex).withMessage("Le numéro de téléphone n'est pas valide, format attendu : (000) 000-0000 ou 000-000-0000"),
    body('couriel_P').isEmail().withMessage("L'adresse email n'est pas valide")
        .matches(emailRegex).withMessage("Format d'email incorrect"),
    body('historique_P').isLength({ min: 5 }).withMessage("L'historique médical doit comporter au moins 5 caractères"),
]

export default patientRules