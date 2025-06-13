
import administrateurC from "../modeles/administrateurC.js"



// 1- Liste des administrateurs
export const administrateurList = async (req, res) => {
    try {
        const admins = await administrateurC.findAll()
        res.status(200).json({ data: admins })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// 2- Création d'un administrateur



export const addAdmin = async (req, res) => {  
    const infoAdmin = req.body
    try {
        const resultAdd = await administrateurC.create(infoAdmin)
        res.status(201).json({ message: 'Administrateur créé avec succès', data: resultAdd })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// 3- Suppression d'un administrateur
export const deleteAdmin = async (req, res) => {
    const { id_Admin2 } = req.params;

    try {
        const admin = await administrateurC.findByPk(id_Admin2);

        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }

        await admin.destroy();
        res.status(200).json({ message: 'Administrateur supprimé avec succès' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// 4- Modification d'un administrateur
export const updateAdmin = async (req, res) => {
    const { id_Admin1 } = req.params;
    const newInfo = req.body;

    try {
        const admin = await administrateurC.findByPk(id_Admin1);

        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }

        await admin.update(newInfo);
        res.status(200).json({ message: 'Administrateur mis à jour avec succès', data: admin });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// 5- Recherche d'un administrateur
export const searchAdministrateur = async (req, res) => {
    try {
        const { id } = req.params;

        const administrateur = await administrateurC.findByPk(id);
        if (!administrateur) {
            return res.status(404).json({ message: "Administrateur non trouvé" });
        }

        res.status(200).json({ data: administrateur });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
