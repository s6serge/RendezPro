<template>
  <main>
    <h1>Docteur : {{ docteur.nom_D }} {{ docteur.prenom_D }}</h1>
    <h2>Spécialité : {{ docteur.specialite_D }}</h2>
    <h3>Contact :</h3>
    <ul>
      <li>Téléphone : {{ docteur.num_Tel_D }}</li>
      <li>Email : {{ docteur.couriel_D }}</li>
      <li>Disponibilité : {{ docteur.disponibilite_D }}</li>
    </ul>

    <!-- Affichage de la photo du docteur -->
    <div v-if="docteur.photo">
      <h3>Photo :</h3>
      <div class="photo-container">
        <img 
          :src="getPhotoUrl(docteur.photo)" 
          alt="Photo du docteur" 
          style="max-width: 200px; max-height: 200px;">
      </div>
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

// Définir une référence pour stocker les données du docteur
const docteur = ref({
  nom_D: '',
  prenom_D: '',
  specialite_D: '',
  num_Tel_D: '',
  couriel_D: '',
  disponibilite_D: 'Disponible',
  photo: null // La photo peut être une URL ou une Base64
});

// Fonction pour obtenir l'URL ou traiter la photo encodée
const getPhotoUrl = (photo) => {
  // Si `photo` est déjà une URL complète
  if (photo.startsWith('http')) {
    return photo;
  }
  // Si `photo` est une chaîne encodée en Base64
  return `data:image/jpeg;base64,${photo}`;
};

// Charger les données du docteur avant le montage du composant
onBeforeMount(() => {
  const url = import.meta.env.VITE_SERVER_URL + '/docteur/' + id;
  axios.get(url)
    .then(res => {
      docteur.value = res.data.data;
    })
    .catch(err => {
      console.error("Erreur lors de la récupération des données du docteur :", err);
    });
});
</script>

<style lang="css" scoped>
main {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

h1 {
  font-size: 24px;
  text-align: center;
}

h2 {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

ul li {
  margin-bottom: 10px;
  color: #34495e;
  font-size: 16px;
}

.photo-container {
  text-align: center;
}

.photo-container img {
  max-width: 400px;
  max-height: 300px;
  border-radius: 50%;
  border: 2px solid #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main:hover {
  border-color: #3498db;
  box-shadow: 0 6px 10px rgba(52, 152, 219, 0.2);
}
</style>
