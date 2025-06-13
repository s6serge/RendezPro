<template>
    <main>
      <h1>Ajout d'un patient</h1>
      <form @submit.prevent="envoyerPatient">
        <div class="mb-3">
          <label for="nom_P" class="form-label">Nom</label>
          <input v-model="patient.nom_P" type="text" class="form-control" id="nom_P" required>
        </div>
        <div class="mb-3">
          <label for="prenom_P" class="form-label">Prénom</label>
          <input v-model="patient.prenom_P" type="text" class="form-control" id="prenom_P" required>
        </div>
        <div class="mb-3">
          <label for="date_Nais_P" class="form-label">Date de naissance</label>
          <input v-model="patient.date_Nais_P" type="date" class="form-control" id="date_Nais_P" required>
        </div>
        <div class="mb-3">
          <label for="adresse_P" class="form-label">Adresse</label>
          <input v-model="patient.adresse_P" type="text" class="form-control" id="adresse_P" required>
        </div>
        <div class="mb-3">
          <label for="num_Tel_P" class="form-label">Numéro de téléphone</label>
          <input
            v-model="patient.num_Tel_P"
            type="tel"
            class="form-control"
            id="num_Tel_P"
            required
            pattern="^(?:\\(\\d{3}\\)\\s?|\\d{3}[-\\s]?)\\d{3}[-\\s]?\\d{4}$"
            placeholder="(000) 000-0000 ou 000-000-0000"
          >
        </div>
        <div class="mb-3">
          <label for="couriel_P" class="form-label">Courriel</label>
          <input v-model="patient.couriel_P" type="email" class="form-control" id="couriel_P" required>
        </div>
        <div class="mb-3">
          <label for="historique_P" class="form-label">Historique médical</label>
          <textarea v-model="patient.historique_P" class="form-control" id="historique_P" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Patient</button>
      </form>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const patient = ref({
    nom_P: null,
    prenom_P: null,
    date_Nais_P: null,
    adresse_P: null,
    num_Tel_P: null,
    couriel_P: null,
    historique_P: null,
  });
  
  const envoyerPatient = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/patients';
    axios.post(url, patient.value)
      .then(res => {
        console.log('Patient ajouté avec succès:', res);
        router.push('/'); // Redirige vers la page d'accueil ou la liste des patients
      })
      .catch(err => console.error('Erreur lors de l\'ajout du patient:', err));
  };
  </script>
  
  <style scoped>
  /* Style optionnel pour le formulaire */
  </style>
  