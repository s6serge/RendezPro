//Importer la base de donnee pour creer les modeles (modeles/administrateurC.js)
import database from "../configuration/connexion.js"

import { DataTypes, UUIDV4 } from "sequelize"

// Modele pour la table administrateurC
const administrateurC = database.define('administrateurC', {
    nom_A: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    prenom_A: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    specialite_A: { 
        type: DataTypes.STRING, 
        allowNull: false // Correspond à `specialite_D` dans `docteur`
    },
    num_Tel_A: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isValidPhoneNumber(value) {
                const regex = /^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;
                if (!regex.test(value)) {
                    throw new Error("Le numéro de téléphone n'est pas valide, format accepté : (000) 000-0000 ou 000-000-0000");
                }
            }
        }
    },
    couriel_A: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isValidEmail(value) {
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(value)) {
                    throw new Error("L'adresse email n'est pas valide. Format: exemple@exemple.com");
                }
            }
        }
    },
    disponibilite_A: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Disponible', 'Occupe', 'Indisponible', 'En pause', 'Rendez-vous complet', 'En ligne', 'En retard']]
        }
    },
    mot_de_passe: { type: DataTypes.STRING, allowNull: false }
   

},
{
    timestamps: false  //Ne pas avoir des colonnes createdAt and updateAt automatiquement
});




export default administrateurC