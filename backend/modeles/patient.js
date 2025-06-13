//Importer la base de donnee pour creer les modeles (modeles/patient.js)
import database from "../configuration/connexion.js"

import { DataTypes, UUIDV4 } from "sequelize"



// Modele pour la table patient
const patient = database.define('patient', {
    //id_Patient : { type: DataTypes.CHAR(36), defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull:false},
    nom_P: {type:DataTypes.STRING, allowNull:false, unique: false},
    prenom_P: {type:DataTypes.STRING, allowNull:false, unique: false},
    date_Nais_P: { type: DataTypes.DATEONLY,  // Utilisation de DATEONLY pour une date sans l'heure
    allowNull: false,  // La date de naissance est obligatoire
    validate: {
      isDate: true,  // Validation pour s'assurer que c'est bien une date
      isBefore(value) {
          // Cette méthode valide que la date de naissance est avant aujourd'hui
          const today = new Date();
          const userDate = new Date(value);
          if (userDate > today) {
              throw new Error("La date de naissance ne peut pas être dans le futur.");
          }
      }
  }
    },
    adresse_P: {type:DataTypes.STRING, allowNull:false},
    num_Tel_P: {
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
  couriel_P: {
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
    historique_P: {type:DataTypes.STRING, allowNull:false, unique: false}
    
})

export default patient
