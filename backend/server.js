//Groupe 5  : Systeme de gestion des reservation dans un hopital

//1- TCHUENKAM KAMDEM SERGE ALAIN

//import'dotenv/config';

import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// importer la connexion a la base de donnees
import database from "../backend/configuration/connexion.js";

//const ENV = dotenv.config().parsed
//dotenv.config()
//Pour l'importation la variable import'dotenv/config' doit etre toujour en premier

//creation du serveur
const app = express();

//Ajouter des middlewares a noter que (app.use(json)) doit etre en dernier
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());
// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

//routes

import administrateurCRoute from "../backend/routes/administrateurCRoute.js";
import docteurRoute from "../backend/routes/docteurRoute.js";
import patientRoute from "../backend/routes/patientRoute.js";
import rendezVousRoute from "../backend/routes/rendezVousRoute.js";
import salleConsultation from "../backend/routes/salleConsultationRoute.js";
import servMedDocteur from "../backend/routes/servMedDocteurRoute.js";
import serviceMedical from "../backend/routes/serviceMedicalRoute.js";

import authRoute from "../backend/routes/authRoute.js";

//import router from "../backend/routes/administrateurCRoute.js"

//Generation des tables

app.use("/api/administrateurs", administrateurCRoute);
app.use("/api/docteur", docteurRoute);
app.use("/api/patients", patientRoute);
app.use("/api/rendezvous", rendezVousRoute);
app.use("/api/salles", salleConsultation);

app.use("/api/", servMedDocteur);

app.use("/api/services", serviceMedical);

app.use("/api/login", authRoute);

app.use("/api/servdoct", servMedDocteur);

database.sync({ alter: true });

//lancer le serveur

//app.listen(process.env.PORT);
//console.info('serveur demarer:')
//console.info('http://localhost:' + process.env.PORT)

const PORT = dotenv.config().parsed.PORT;

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`));
