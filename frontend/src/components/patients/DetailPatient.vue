<template>
    <main>
      <h1>Patient : {{ patient.nom_P }} {{ patient.prenom_P }}</h1>
      <h2>Date de naissance : {{ patient.date_Nais_P }}</h2>
      <h3>Contact :</h3>
      <ul>
        <li>Adresse : {{ patient.adresse_P }}</li>
        <li>Téléphone : {{ patient.num_Tel_P }}</li>
        <li>Email : {{ patient.couriel_P }}</li>
      </ul>
      <div v-if="patient.historique_P">
        <h3>Historique médical :</h3>
        <p>{{ patient.historique_P }}</p>
      </div>
    </main>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Récupérer l'ID depuis les paramètres de la route
  const route = useRoute();
  const { id } = route.params;
  
  // Définir une référence pour stocker les données du patient
  const patient = ref({
    nom_P: '',
    prenom_P: '',
    date_Nais_P: '',
    adresse_P: '',
    num_Tel_P: '',
    couriel_P: '',
    historique_P: ''
  });
  
  // Charger les données du patient avant le montage du composant
  onBeforeMount(() => {
    const url = import.meta.env.VITE_SERVER_URL + '/patients/' + id;
    axios.get(url)
      .then(res => {
        patient.value = res.data.data;
      })
      .catch(err => {
        console.error("Erreur lors de la récupération des données du patient :", err);
      });
  });
  </script>
  
  <style scoped>
  /* Ajoutez vos styles spécifiques ici, si nécessaire */
  </style>
  