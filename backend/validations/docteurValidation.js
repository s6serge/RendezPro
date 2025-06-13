import { body, check, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z]{4,}$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
//const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const docteurRules = [
    body('id_docteur').matches(nameRegex).withMessage("le id n'est pas conforme"),
    body('nom_D').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('prenom_D').matches(nameRegex).withMessage("le prenom n'est pas conforme"),
    body('couriel_D').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('specialite_D').matches(nameRegex).withMessage("la specialite n'est pas conforme"),
    body('disponibilite_D').matches(nameRegex).withMessage("la disponibilite n'est pas conforme"),
    body('photo').matches(nameRegex).withMessage("la phote n'est pas conforme")
]

export default docteurRules