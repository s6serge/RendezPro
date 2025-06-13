import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants pour les administrateurs
import AddAdmin from '@/components/administrateurs/AddAdmin.vue';
import ListAdmin from '@/components/administrateurs/ListAdmin.vue';
import UpdateAdmin from '@/components/administrateurs/UpdateAdmin.vue';
import DetailAdmin from '@/components/administrateurs/DetailAdmin.vue';

// Importation des composants pour les docteurs
import AddDocteur from '@/components/docteurs/AddDocteur.vue';
import ListDocteur from '@/components/docteurs/ListDocteur.vue';
import UpdateDocteur from '@/components/docteurs/UpdateDocteur.vue';
import DetailDocteur from '@/components/docteurs/DetailDocteur.vue';

// Importation des composants pour les patients
import AddPatient from '@/components/patients/AddPatient.vue';
import ListPatient from '@/components/patients/ListPatient.vue';
import UpdatePatient from '@/components/patients/UpdatePatient.vue';
import DetailPatient from '@/components/patients/DetailPatient.vue';

// Importation des composants pour les services médicaux
import AddService from '@/components/serviceMedicale/AddService.vue';
import ListService from '@/components/serviceMedicale/ListService.vue';
import UpdateService from '@/components/serviceMedicale/UpdateService.vue';
import DetailService from '@/components/serviceMedicale/DetailService.vue';

// Importation des composants pour les salles de consultation
import AddSalle from '@/components/salleDeConsultation/AddSalle.vue'; // Ajouter une salle
import ListSalle from '@/components/salleDeConsultation/ListSalle.vue'; // Liste des salles
import UpdateSalle from '@/components/salleDeConsultation/UpdateSalle.vue'; // Modifier une salle
import DetailSalle from '@/components/salleDeConsultation/DetailSalle.vue'; // Détails d'une salle

// Importation des composants pour les rendez-vous
import AddRendezVous from '@/components/rendezVous/AddRendezVous.vue'; // Ajouter un rendez-vous
import ListRendezVous from '@/components/rendezVous/ListRendezVous.vue'; // Liste des rendez-vous
import UpdateRendezVous from '@/components/rendezVous/UpdateRendezVous.vue'; // Modifier un rendez-vous
import DetailRendezVous from '@/components/rendezVous/DetailRendeVous.vue'; // Détails d'un rendez-vous

//Importation de la page daccueil
import homepage from '@/views/homepage.vue';

//Importation du login
//import Login from '@/components/auth/Login.vue';


const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },

  {
    path: "/",
    name: "homepage",
    component: homepage,
  },
  // Routes pour les administrateurs
  {
    path: '/administrateurs',
    name: 'ListAdmin',
    component: ListAdmin,
  },
  {
    path: '/administrateurs/ajouter',
    name: 'AddAdmin',
    component: AddAdmin,
  },
  {
    path: '/administrateurs/editer/:id',
    name: 'UpdateAdmin',
    component: UpdateAdmin,
    props: true,
  },
  {
    path: '/administrateurs/details/:id',
    name: 'DetailAdmin',
    component: DetailAdmin,
    props: true,
  },

  // Routes pour les docteurs
{
  path: '/docteur', // Page liste des docteurs
  name: 'ListDocteur',
  component: ListDocteur,
},
{
  path: '/docteur/ajouter', // Page ajouter un docteur
  name: 'AddDocteur',
  component: AddDocteur,
},
{
  path: '/docteur/:id', // Page éditer un docteur
  name: 'UpdateDocteur',
  component: UpdateDocteur,
  props: true,
},
{
  path: '/docteur/details/:id', // Page détails d'un docteur
  name: 'DetailDocteur',
  component: DetailDocteur,
  props: true,
},


  // Routes pour les patients
  {
    path: '/patients',
    name: 'ListPatient',
    component: ListPatient,
  },
  {
    path: '/patients/ajouter',
    name: 'AddPatient',
    component: AddPatient,
  },
  {
    path: '/patients/editer/:id',
    name: 'UpdatePatient',
    component: UpdatePatient,
    props: true,
  },
  {
    path: '/patients/details/:id',
    name: 'DetailPatient',
    component: DetailPatient,
    props: true,
  },

  // Routes pour les services médicaux
  {
    path: '/services',
    name: 'ListService',
    component: ListService,
  },
  {
    path: '/services/ajouter',
    name: 'AddService',
    component: AddService,
  },
  {
    path: '/services/editer/:id',
    name: 'UpdateService',
    component: UpdateService,
    props: true,
  },
  {
    path: '/services/details/:id',
    name: 'DetailService',
    component: DetailService,
    props: true,
  },

  // Routes pour les salles de consultation
  {
    path: '/salles',
    name: 'ListSalle',
    component: ListSalle, // Liste des salles de consultation
  },
  {
    path: '/salles/ajouter',
    name: 'AddSalle',
    component: AddSalle, // Formulaire pour ajouter une salle de consultation
  },
  {
    path: '/salles/editer/:id',
    name: 'UpdateSalle',
    component: UpdateSalle, // Formulaire pour modifier une salle de consultation
    props: true, // Permet de passer l'id comme prop
  },
  {
    path: '/salles/details/:id',
    name: 'DetailSalle',
    component: DetailSalle, // Détails d'une salle de consultation
    props: true, // Permet de passer l'id comme prop
  },

  // Routes pour les rendez-vous
  {
    path: '/rendezvous',
    name: 'ListRendezVous',
    component: ListRendezVous, // Liste des rendez-vous
  },
  {
    path: '/rendezvous/ajouter',
    name: 'AddRendezVous',
    component: AddRendezVous, // Formulaire pour ajouter un rendez-vous
  },
  {
    path: '/rendezvous/editer/:id',
    name: 'UpdateRendezVous',
    component: UpdateRendezVous, // Formulaire pour modifier un rendez-vous
    props: true, // Permet de passer l'id comme prop
  },
  {
    path: '/rendezvous/details/:id',
    name: 'DetailRendezVous',
    component: DetailRendezVous, // Détails d'un rendez-vous
    props: true, // Permet de passer l'id comme prop
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
