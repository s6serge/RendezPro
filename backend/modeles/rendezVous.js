//Importer la base de donnee pour creer les modeles (modeles/rendezVous.js)
import database from "../configuration/connexion.js"

import { DataTypes } from "sequelize"

import patient from "./patient.js"
import administrateurC from "./administrateurC.js"
import salleConsultation from "./salleConsultation.js"
import docteur from "./docteur.js"



//import{ docteur, patient, administrateurC, salleConsultation } from "./modeles"


const rendezVous = database.define('rendezVous', {
   /* id_Rendez: {
      type: DataTypes.CHAR(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },*/
    date: {
      type: DataTypes.DATEONLY,  // Pour une date sans l'heure
      allowNull: false,
    },
    heure: {
      type: DataTypes.TIME,  // Heure du rendez-vous
      allowNull: false,
    },
    motif: {
      type: DataTypes.STRING,
      allowNull: true,  // Le motif peut être optionnel
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en attente', // Par défaut, le statut est 'en attente'
    }
    
  })

  export default rendezVous