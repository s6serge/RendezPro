//Importer la base de donnee pour creer les modeles (modeles/docteur.js)
import database from "../configuration/connexion.js"

import { DataTypes, INTEGER, Sequelize, UUIDV4 } from "sequelize"

// Modele pour la table docteur
const docteur = database.define('docteur', {
    //id_Docteur : { type: DataTypes.CHAR(36), defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull:false},
    id_Docteur : { type: DataTypes.CHAR(36),  primaryKey: true, allowNull:false, defaultValue: DataTypes.UUIDV4 },
    nom_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    prenom_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    specialite_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    num_Tel_D: {
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
  couriel_D: {
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
    disponibilite_D:{type: DataTypes.STRING, allowNull: false, validate:{
        isIn:[['Disponible', 'Occupe', 'Indisponible', 'En pause', 'Rendez-vous complet', 'En ligne', 'En retard']]
    }},
    photo:DataTypes.STRING
})



export default docteur;