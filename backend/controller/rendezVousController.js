import rendezVous from "../modeles/rendezVous.js"
import docteur from "../modeles/docteur.js";
import patient from "../modeles/patient.js";
import administrateurC from "../modeles/administrateurC.js";
import salleConsultation from "../modeles/salleConsultation.js";


// Controller - Liste des rendez-vous
export const rendezVousList = async (req, res) => {
    try {
        const rendezVousEntries = await rendezVous.findAll({
            include: [
                { model: docteur, attributes: ['nom_D', 'prenom_D'] },  // Include doctor details
                { model: patient, attributes: ['nom_P', 'prenom_P'] },  // Include patient details
                { model: administrateurC, attributes: ['nom_Admin'] },  // Include admin details
                { model: salleConsultation, attributes: ['numero_S', 'etage_S'] },  // Include room details
            ]
        });
        res.status(200).json({ data: rendezVousEntries });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// 2- Création d'un rendez-vous
export const createRendezVous = async (req, res) => {
    try {
        const { id_Docteur, id_Patient, id_Admin, id_Salle, date, heure, motif } = req.body;

        const newRendezVous = await rendezVous.create({
            id_Docteur,
            id_Patient,
            id_Admin,
            id_Salle,
            date,
            heure,
            motif
        });

        res.status(201).json({ message: "Rendez-vous créé avec succès", data: newRendezVous });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3 - Suppression d'un rendez-vous
export const deleteRendezVous = async (req, res) => {
    try {
        const { id } = req.params;

        const rendezVousToDelete = await rendezVous.findByPk(id);
        if (!rendezVousToDelete) {
            return res.status(404).json({ message: "Rendez-vous non trouvé" });
        }

        await rendezVousToDelete.destroy();
        res.status(200).json({ message: "Rendez-vous supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4 - Modification d'un rendez-vous
export const updateRendezVous = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_Docteur, id_Patient, id_Admin, id_Salle, date, heure, motif, status } = req.body;

        const rendezVousToUpdate = await rendezVous.findByPk(id);
        if (!rendezVousToUpdate) {
            return res.status(404).json({ message: "Rendez-vous non trouvé" });
        }

        const updatedRendezVous = await rendezVousToUpdate.update({
            id_Docteur,
            id_Patient,
            id_Admin,
            id_Salle,
            date,
            heure,
            motif,
            status
        });

        res.status(200).json({ message: "Rendez-vous mis à jour avec succès", data: updatedRendezVous });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5 - Recherche d'un rendez-vous
export const searchRendezVous = async (req, res) => {
    try {
        const { id } = req.params;

        const rendezVousEntry = await rendezVous.findByPk(id, {
            include: [
                { model: docteur, attributes: ['nom_D', 'prenom_D'] },
                { model: patient, attributes: ['nom_P', 'prenom_P'] },
                { model: administrateurC, attributes: ['nom_Admin'] },
                { model: salleConsultation, attributes: ['numero_S', 'etage_S'] },
            ]
        });

        if (!rendezVousEntry) {
            return res.status(404).json({ message: "Rendez-vous non trouvé" });
        }

        res.status(200).json({ data: rendezVousEntry });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
