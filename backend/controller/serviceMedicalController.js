import serviceMedical from "../modeles/serviceMedical.js"

// 1- Lister tous les services médicaux
export const getAllServices = async (req, res) => {
    try {
        const services = await serviceMedical.findAll();
        return res.status(200).json({
            message: "Services médicaux récupérés avec succès.",
            data: services
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erreur lors de la récupération des services médicaux.",
            error: error.message
        });
    }
};

// 2- Créer un nouveau service médical
export const createServiceMedical = async (req, res) => {
    try {
        const { nom_S, description_S } = req.body;
        
        const newService = await serviceMedical.create({
            nom_S,
            description_S
        });

        return res.status(201).json({
            message: "Service médical créé avec succès.",
            data: newService
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erreur lors de la création du service médical.",
            error: error.message
        });
    }
};

// 3- Supprimer un service médical par son ID
export const deleteServiceMedical = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await serviceMedical.findByPk(id);

        if (!service) {
            return res.status(404).json({
                message: `Service médical avec l'ID ${id} non trouvé.`
            });
        }

        await service.destroy(); // Supprimer le service

        return res.status(200).json({
            message: `Service médical avec l'ID ${id} supprimé avec succès.`
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erreur lors de la suppression du service médical.",
            error: error.message
        });
    }
};

// 4- Modifier un service médical par son ID
export const updateServiceMedical = async (req, res) => {
    const { id } = req.params;
    const { nom_S, description_S } = req.body;

    try {
        const service = await serviceMedical.findByPk(id);

        if (!service) {
            return res.status(404).json({
                message: `Service médical avec l'ID ${id} non trouvé.`
            });
        }

        // Mise à jour des données
        service.nom_S = nom_S || service.nom_S;
        service.description_S = description_S || service.description_S;

        await service.save(); // Enregistrer les modifications

        return res.status(200).json({
            message: "Service médical mis à jour avec succès.",
            data: service
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erreur lors de la mise à jour du service médical.",
            error: error.message
        });
    }
};

// 5- Rechercher des services médicaux par nom
export const searchServices = async (req, res) => {
    const { query } = req.query; // Reçoit le mot-clé de recherche

    try {
        const services = await serviceMedical.findAll({
            where: {
                nom_S: {
                    [Op.like]: `%${query}%`  // Recherche par nom avec un "like" (contient le texte)
                }
            }
        });

        if (services.length === 0) {
            return res.status(404).json({
                message: "Aucun service médical trouvé correspondant à votre recherche."
            });
        }

        return res.status(200).json({
            message: "Services médicaux trouvés.",
            data: services
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erreur lors de la recherche des services médicaux.",
            error: error.message
        });
    }
};
