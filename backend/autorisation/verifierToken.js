
//Ce fichier permet de verifier la route si un jeton JWT est fourni dans l'entete Authorization
// et de valider le jeton avec la cle secrete.

//Importer jwt
import jwt from 'jsonwebtoken'

export const verifierToken = (req, res, next) => {
    //Recuperation du token
    const bearerToken = req.headers.authorization

    //Verification de la presence du token
    if (!bearerToken) return res.status(401).json({ message: "Mais vous etes pas connecte!" })

    //Recuperer le token sans la partie Bearer
    const token = bearerToken.split(' ')[1]

    jwt.verify(token, process.env.CODE_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ message: err.message })

            req.administrateurCid = payload.id

        next()
    })

}



