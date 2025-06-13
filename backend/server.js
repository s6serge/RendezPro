//Groupe 5  : Systeme de gestion des reservation dans un hopital

//1- TCHUENKAM KAMDEM SERGE ALAIN
//2- Salima Messouci
//3- Othmane El Baroudi

//import'dotenv/config';

import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser'; 
import dotenv from 'dotenv';

// importer la connexion a la base de donnees
import database from '../Groupe05/configuration/connexion.js';

//const ENV = dotenv.config().parsed
//dotenv.config()
//Pour l'importation la variable import'dotenv/config' doit etre toujour en premier

//creation du serveur
const app = express();


//Ajouter des middlewares a noter que (app.use(json)) doit etre en dernier
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json())
// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))


//routes

import administrateurCRoute from "../Groupe05/routes/administrateurCRoute.js"
import docteurRoute from "../Groupe05/routes/docteurRoute.js"
import patientRoute from "../Groupe05/routes/patientRoute.js"
import rendezVousRoute from "../Groupe05/routes/rendezVousRoute.js"
import salleConsultation from "../Groupe05/routes/salleConsultationRoute.js"
import servMedDocteur from "../Groupe05/routes/servMedDocteurRoute.js"
import serviceMedical from '../Groupe05/routes/serviceMedicalRoute.js'

import authRoute from "../Groupe05/routes/authRoute.js"

//import router from "../Groupe05/routes/administrateurCRoute.js"




//Generation des tables 

app.use('/api/administrateurs', administrateurCRoute)
app.use('/api/docteur', docteurRoute)
app.use('/api/patients', patientRoute)
app.use('/api/rendezvous', rendezVousRoute)
app.use('/api/salles', salleConsultation)

app.use('/api/', servMedDocteur)

app.use('/api/services', serviceMedical)

app.use('/api/login', authRoute)

app.use('/api/servdoct', servMedDocteur)

database.sync({ alter: true })

//lancer le serveur

//app.listen(process.env.PORT);
//console.info('serveur demarer:')
//console.info('http://localhost:' + process.env.PORT)

const PORT = dotenv.config().parsed.PORT

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))