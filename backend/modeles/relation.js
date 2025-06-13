
import patient from "./patient.js"
import administrateurC from "./administrateurC.js"
import salleConsultation from "./salleConsultation.js"
import docteur from "./docteur.js"
import rendezVous from "./rendezVous.js"
//import servMedDocteur from "/servMedDocteur.js"
import serviceMedical from "./serviceMedical.js"
import database from "../configuration/connexion.js"
import servMedDocteur from "./servMedDocteur.js"


// Relations pour la table rendez vous
docteur.hasMany(rendezVous)
rendezVous.belongsTo(docteur)

patient.hasMany(rendezVous)
rendezVous.belongsTo(patient)

administrateurC.hasMany(rendezVous)
rendezVous.belongsTo(administrateurC)

salleConsultation.hasMany(rendezVous)
rendezVous.belongsTo(salleConsultation)

serviceMedical.hasMany(rendezVous)
rendezVous.belongsTo(serviceMedical)

//export default rendezVous;



// Associations entre docteur, serviceMedical
docteur.belongsToMany(serviceMedical, { through: 'servMedDocteur' });
serviceMedical.belongsToMany(docteur, { through: 'servMedDocteur' });




//export default servMedDocteur;
export default {
    patient,
    administrateurC,
    salleConsultation,
    docteur,
    rendezVous,
    serviceMedical,
    servMedDocteur
  }