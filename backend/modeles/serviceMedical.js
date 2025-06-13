//Importer la base de donnee pour creer les modeles (modeles/serviceMedical.js)
import database from "../configuration/connexion.js"

import { DataTypes} from "sequelize"

// Modele pour la table serviceMedical
const serviceMedical = database.define('serviceMedical', {
    //id_Service : { type: DataTypes.CHAR(36), defaultValue: DataTypes.UUIDV4,  primaryKey: true, allowNull:false},
     id_Service : { type: DataTypes.CHAR(36),  primaryKey: true, allowNull:false, defaultValue: DataTypes.UUIDV4 },
    nom_S: {type:DataTypes.STRING, allowNull:false, unique: false},
    description_S: {type:DataTypes.STRING, allowNull:false, unique: false}
})

export default serviceMedical