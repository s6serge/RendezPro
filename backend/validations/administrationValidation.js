import { body, check, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z]{4,}$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
//const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const administrateurCRules = [
    body('nom_A').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('prenom_A').matches(nameRegex).withMessage("le prenom n'est pas conforme"),
    body('couriel_A').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special'),
        body('specialite_A').matches(nameRegex).withMessage("la specialite n'est pas conforme"),
        body('disponibilite_A').matches(nameRegex).withMessage("la disponibilite n'est pas conforme")
    
]

export default administrateurCRules