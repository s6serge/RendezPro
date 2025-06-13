//import bcrypt from bcryptjs



import docteur from "../modeles/docteur.js";



// 1- Liste des docteurs
export const docteurList = async (req, res) => {
    try {
        const docte = await docteur.findAll();
        res.status(200).json({ data: docte });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 2 - Création d'un docteur
export const createDocteur = async (req, res) => {

    //Les informations de la personne a ajouter depuis le formulaire/Postman

    //Construire le chemin de l'image ou du fichier
    const picture = req.file
    //console.log('path', req.body)
    const imagePath = picture?.path?.split('\\').join('/')
    const fullPath = picture ? req.protocol + '://' + req.get('host') + '/' + imagePath : null

    try {
        const { nom_D, prenom_D, specialite_D, num_Tel_D, couriel_D, disponibilite_D, photo } = req.body;

        const newDocteur = await docteur.create({
            nom_D,
            prenom_D,
            specialite_D,
            num_Tel_D,
            couriel_D,
            disponibilite_D,
            photo
        });

        res.status(201).json({ message: "Docteur créé avec succès", data: newDocteur });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// 3 - Modification d'un docteur
export const updateDocteur = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom_D, prenom_D, specialite_D, num_Tel_D, couriel_D, disponibilite_D, photo } = req.body;

        const docteurToUpdate = await docteur.findByPk(id);
        if (!docteurToUpdate) {
            return res.status(404).json({ message: "Docteur non trouvé" });
        }

        const updatedDocteur = await docteurToUpdate.update({
            nom_D,
            prenom_D,
            specialite_D,
            num_Tel_D,
            couriel_D,
            disponibilite_D,
            photo
        });

        res.status(200).json({ message: "Docteur mis à jour avec succès", data: updatedDocteur });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// 4 - Suppression d'un docteur
export const deleteDocteur = async (req, res) => {
    try {
        const { id } = req.params;

        const docteurToDelete = await docteur.findByPk(id);
        if (!docteurToDelete) {
            return res.status(404).json({ message: "Docteur non trouvé" });
        }

        await docteurToDelete.destroy();
        res.status(200).json({ message: "Docteur supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 5 - Recherche d'un docteur
export const searchDocteur = async (req, res) => {
    try {
        const {id } = req.params;

        const doct = await docteur.findByPk(id); // Find by primary key
        if (!doct) {
            return res.status(404).json({ message: "Docteur non trouvé" });
        }

        res.status(200).json({ data: doct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// 6 - Recherche par nom ou spécialité
export const searchDocteurByNameOrSpeciality = async (req, res) => {
    try {
        const { query } = req.query;  // Get the query string from the request

        // Search for doctors by name or specialty
        const docteurs = await docteur.findAll({
            where: {
                [Op.or]: [
                    { nom_D: { [Op.iLike]: `%${query}%` } },
                    { specialite_D: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });

        if (docteurs.length === 0) {
            return res.status(404).json({ message: "Aucun docteur trouvé" });
        }

        res.status(200).json({ data: docteurs });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

