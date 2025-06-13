


import servMedDocteur from "../modeles/servMedDocteur.js"


// 1 - Liste des services médicaux pour chaque docteur
export const servMedDocteurList = async (req, res) => {
    try {
        const servMedEntries = await servMedDocteur.findAll({
            include: [
                { model: docteur, attributes: ['nom_D', 'prenom_D'] },  // Inclure les informations du docteur
                { model: serviceMedical, attributes: ['nom_Service'] },  // Inclure les informations du service médical
            ]
        });
        res.status(200).json({ data: servMedEntries });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/*
// 2 - Création d'une nouvelle relation service médical pour un docteur
export const createServMedDocteur = async (req, res) => {
    try {
        const { id_Docteur, id_Service } = req.body;

        const newServMed = await servMedDocteur.create({
            id_Docteur,
            id_Service
        });

        res.status(201).json({ message: "Service médical pour docteur créé avec succès", data: newServMed });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}*/

// 3- Suppression d'une relation service médical pour un docteur
export const deleteServMedDocteur = async (req, res) => {
    try {
        const { id } = req.params;

        const servMedToDelete = await servMedDocteur.findByPk(id);
        if (!servMedToDelete) {
            return res.status(404).json({ message: "Service médical pour docteur non trouvé" });
        }

        await servMedToDelete.destroy();
        res.status(200).json({ message: "Service médical pour docteur supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 4 - Modification d'une relation service médical pour un docteur
export const updateServMedDocteur = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_Docteur, id_Service } = req.body;

        const servMedToUpdate = await servMedDocteur.findByPk(id);
        if (!servMedToUpdate) {
            return res.status(404).json({ message: "Service médical pour docteur non trouvé" });
        }

        const updatedServMed = await servMedToUpdate.update({
            id_Docteur,
            id_Service
        });

        res.status(200).json({ message: "Service médical pour docteur mis à jour avec succès", data: updatedServMed });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 5 - Recherche d'une relation service médical pour un docteur
export const searchServMedDocteur = async (req, res) => {
    try {
        const { id } = req.params;

        const servMed = await servMedDocteur.findByPk(id, {
            include: [
                { model: docteur, attributes: ['nom_D', 'prenom_D'] },
                { model: serviceMedical, attributes: ['nom_Service'] },
            ]
        });
        if (!servMed) {
            return res.status(404).json({ message: "Service médical pour docteur non trouvé" });
        }

        res.status(200).json({ data: servMed });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
