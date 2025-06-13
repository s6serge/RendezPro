<template>
    <main>
      <h1>Administrateur : {{ administrateur.nom_A }} {{ administrateur.prenom_A }}</h1>
      <h2>Spécialité : {{ administrateur.specialite_A }}</h2>
      <h3>Contact :</h3>
      <ul>
        <li>Téléphone : {{ administrateur.num_Tel_A }}</li>
        <li>Email : {{ administrateur.couriel_A }}</li>
        <li>Disponibilité : {{ administrateur.disponibilite_A }}</li>
      </ul>
    </main>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Récupérer l'ID depuis les paramètres de la route
  const route = useRoute();
  const { id } = route.params;
  
  // Définir une référence pour stocker les données de l'administrateur
  const administrateur = ref({
    nom_A: '',
    prenom_A: '',
    specialite_A: '',
    num_Tel_A: '',
    couriel_A: '',
    disponibilite_A: 'Disponible',
    mot_de_passe: ''
  });
  
  // Charger les données de l'administrateur avant le montage du composant
  onBeforeMount(() => {
    const url = import.meta.env.VITE_SERVER_URL + '/administrateurs/' + id;
    axios.get(url).then(res => {
      administrateur.value = res.data.data;
    }).catch(err => {
      console.error("Erreur lors de la récupération des données de l'administrateur :", err);
    });
  });
  </script>
  
  <style lang="css" scoped></style>
  