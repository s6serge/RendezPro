/*
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import administrateurC from "../modeles/administrateurC"

// Créer la fonction (controller) pour le login
export const login = async (req, res) => {
    const { couriel_A, mot_de_passe } = req.body;

    // Vérifier si l'email est fourni
    if (!couriel_A) {
        return res.status(400).json({ message: "L'email est requis !" });
    }

    try {
        // Recherche de l'utilisateur par email
        const user = await administrateurC.findOne({ where: { couriel_A } });

        // Si l'utilisateur n'existe pas
        if (!user) {
            return res.status(404).json({ message: "Cet utilisateur n’existe pas" });
        }

        // Vérification du mot de passe
        const verifyPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe);

        if (!verifyPassword) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // Générer le token
        const payload = { id: user.id }; // Payload pour le JWT
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Assurez-vous d'utiliser une clé secrète

        // Retourner la réponse avec les données de l'utilisateur et le token
        return res.status(200).json({ data: user, token });
        
    } catch (error) {
        // Gestion des erreurs serveur
        return res.status(500).json({ message: "Une erreur s'est produite", error: error.message });
    }
}*/
