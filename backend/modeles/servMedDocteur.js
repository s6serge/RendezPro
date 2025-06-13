

//Importer la base de donnee pour creer les modeles (modeles/servMedDocteur.js)
import database from "../configuration/connexion.js"



import { DataTypes, UUIDV4 } from "sequelize"

import docteur from "./docteur.js"
import serviceMedical from "./serviceMedical.js"

// Modele pour la table serviceMedical
const servMedDocteur = database.define('servMedDocteur', {
   // id_SerMD : { type: DataTypes.CHAR(36), defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull:false},
    id_Docteur: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: docteur,  // Référence à la table docteur
          key: 'id_Docteur',      // Clé primaire de la table docteur
        },
      },
      id_Service: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: serviceMedical, // Référence à la table service medicale
          key: 'id_Service',      // Clé primaire de la table service medicale
        },
      }   
},
{
  timestamps: true, // Ajoute createdAt et updatedAt
  primaryKey: ['id_Docteur', 'id_Service'], // Définir une clé primaire composite
})




/*

const servMedDocteur = database.define('servMedDocteur', {
  // Vous pouvez ajouter des attributs supplémentaires si nécessaire
}, { timestamps: false });*/


export default servMedDocteur
