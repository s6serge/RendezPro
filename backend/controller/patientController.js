
import patient from "../modeles/patient.js"

import patientRules from "../validations/patientValidation.js";

// 1 - Liste des patients
export const patientList = async (req, res) => {
    try {
        const patients = await patient.findAll();
        res.status(200).json({ data: patients });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 2 - Création d'un patient
export const createPatient = async (req, res) => {
    try {
        const { nom_P, prenom_P, date_Nais_P, adresse_P, num_Tel_P, couriel_P, historique_P } = req.body;

        const newPatient = await patient.create({
            nom_P,
            prenom_P,
            date_Nais_P,
            adresse_P,
            num_Tel_P,
            couriel_P,
            historique_P
        });

        res.status(201).json({ message: "Patient créé avec succès", data: newPatient });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 3- Suppression d'un patient
export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;

        const patientToDe = await patient.findByPk(id);
        if (!patientToDe) {
            return res.status(404).json({ message: "Patient non trouvé" });
        }

        await patientToDe.destroy();
        res.status(200).json({ message: "Patient supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//// 4 - Modification d'un patient
export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom_P, prenom_P, date_Nais_P, adresse_P, num_Tel_P, couriel_P, historique_P } = req.body;

        const patientToUpdat = await patient.findByPk(id);
        if (!patientToUpdat) {
            return res.status(404).json({ message: "Patient non trouvé" });
        }

        const updatedP = await patientToUpdat.update({
            nom_P,
            prenom_P,
            date_Nais_P,
            adresse_P,
            num_Tel_P,
            couriel_P,
            historique_P
        });

        res.status(200).json({ message: "Patient mis à jour avec succès", data: updatedP });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 5- Recherche d'un patient
export const searchPatient = async (req, res) => {
    try {
        const { id } = req.params;

        const patient = await patient.findByPk(id); // Find by primary key
        if (!patient) {
            return res.status(404).json({ message: "Patient non trouvé" });
        }

        res.status(200).json({ data: patient });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 6 - Recherche par nom ou email
export const searchPatientByNameOrEmail = async (req, res) => {
    try {
        const { query } = req.query;  // Get the query string from the request

        // Search for patients by name or email
        const patients = await patient.findAll({
            where: {
                [Op.or]: [
                    { nom_P: { [Op.iLike]: `%${query}%` } },
                    { couriel_P: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });

        if (patients.length === 0) {
            return res.status(404).json({ message: "Aucun patient trouvé" });
        }

        res.status(200).json({ data: patients });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
