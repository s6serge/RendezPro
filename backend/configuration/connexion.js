/*

//importer le module promise-msql dans le fichier 
//import mysql from 'promise-mysql'

//Connexion a la base de donne
import  {Sequelize}  from 'sequelize'

//Importer les variable de connexion
import dotenv from 'dotenv'

//// Chargement des variables d'environnement depuis un fichier .env à l'aide de la bibliothèque dotenv
//const ENV = dotenv.config().parsed
dotenv.config()

//Création d'une nouvelle instance de Sequelize pour se connecter à la base de données
const connexion = new Sequelize (
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
     {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
   // port:ENV.
   
})


    try {
      await connexion.authenticate();  // Tester la connexion à la base de données
      console.log('Connexion à la base de données réussie.');
      
      // Créer les tables si elles n'existent pas déjà
      await connexion.sync();  // Synchronise les modèles avec la base de données
      console.log('Tables synchronisées avec la base de données.');
    } catch (error) {
      console.error('Impossible de se connecter à la base de données:', error);
    }
  

/* L'instance de `connexion` est exportée afin qu'elle puisse être utilisée ailleurs dans l'application.
 Cela permet d'établir une connexion à la base de données depuis d'autres fichiers ou modules.*/
 
 // export default connexion

 import dotenv from 'dotenv';
 import { Sequelize } from 'sequelize';

 
 // Charger les variables d'environnement depuis le fichier .env
 dotenv.config();
 
 const NODE_ENV = process.env.NODE_ENV || 'development';

 // Variables d'environnement
 const {
   DB_NAME,
   DB_USER,
   DB_PASSWORD,
   DB_HOST,
   DB_DIALECT = 'mysql',
   DB_PORT  // Défaut à 3306 si non défini
    // Utilisé pour déterminer si on est en mode production ou développement
 } = process.env;
 
 
 
 // Créer une instance de Sequelize pour se connecter à la base de données
 const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
   host: DB_HOST,
   dialect: DB_DIALECT,
   port: DB_PORT, // Utiliser le port depuis les variables d'environnement
   logging: NODE_ENV === 'development', // Log des requêtes SQL uniquement en mode développement
 });
 
 
 
 /*
 // Synchroniser les modèles avec la base de données
 const syncDatabase = async () => {
   try {
     // Tester la connexion à la base de données
     await database.authenticate();
     console.log('Connexion à la base de données réussie.');
 
     // Synchroniser les modèles
     const forceSync = NODE_ENV === 'development'; // Ne force pas la création des tables en production
     await database.sync({ force: forceSync });
 
     if (forceSync) {
       console.log('Tables recréées avec succès.');
     } else {
       console.log('Tables synchronisées avec succès.');
     }
   } catch (error) {
     console.error('Erreur de connexion ou de synchronisation de la base de données :', error);
   }
 };*/
 


 // Exécuter la synchronisation
 //syncDatabase();
 
 // Exporter la connexion Sequelize pour l'utiliser dans d'autres parties de l'application
 export default database;
 


