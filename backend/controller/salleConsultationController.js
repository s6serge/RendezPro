import salleConsultation from "../modeles/salleConsultation.js"

// 1- Liste des salles de consultation
export const salleConsultationList = async (req, res) => {
    try {
        const salles = await salleConsultation.findAll();
        res.status(200).json({ data: salles });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 2- Création d'une salle de consultation
export const createSalleConsultation = async (req, res) => {
    try {
        const { numero_S, etage_S, capacite_S, dispon_S } = req.body;

        const newSalle = await salleConsultation.create({
            numero_S,
            etage_S,
            capacite_S,
            dispon_S
        });

        res.status(201).json({ message: "Salle de consultation créée avec succès", data: newSalle });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 3 - Suppression d'une salle de consultation
export const deleteSalleConsultation = async (req, res) => {
    try {
        const { id } = req.params;

        const salleToDelete = await salleConsultation.findByPk(id);
        if (!salleToDelete) {
            return res.status(404).json({ message: "Salle de consultation non trouvée" });
        }

        await salleToDelete.destroy();
        res.status(200).json({ message: "Salle de consultation supprimée avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 4 - Modification d'une salle de consultation
export const updateSalleConsultation = async (req, res) => {
    try {
        const { id } = req.params;
        const { numero_S, etage_S, capacite_S, dispon_S } = req.body;

        const salleToUpdate = await salleConsultation.findByPk(id);
        if (!salleToUpdate) {
            return res.status(404).json({ message: "Salle de consultation non trouvée" });
        }

        const updatedSalle = await salleToUpdate.update({
            numero_S,
            etage_S,
            capacite_S,
            dispon_S
        });

        res.status(200).json({ message: "Salle de consultation mise à jour avec succès", data: updatedSalle });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 5 - Recherche d'une salle de consultation
export const searchSalleConsultation = async (req, res) => {
    try {
        const { id } = req.params;

        const salle = await salleConsultation.findByPk(id); // Find by primary key
        if (!salle) {
            return res.status(404).json({ message: "Salle de consultation non trouvée" });
        }

        res.status(200).json({ data: salle });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 6 - Recherche par numéro ou étage
export const searchSalleConsultationByNumberOrFloor = async (req, res) => {
    try {
        const { query } = req.query;  // Get the query string from the request

        const salles = await salleConsultation.findAll({
            where: {
                [Op.or]: [
                    { numero_S: { [Op.iLike]: `%${query}%` } },
                    { etage_S: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });

        if (salles.length === 0) {
            return res.status(404).json({ message: "Aucune salle de consultation trouvée" });
        }

        res.status(200).json({ data: salles });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
