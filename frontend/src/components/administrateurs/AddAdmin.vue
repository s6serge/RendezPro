<template>
    <main>
      <h1>Ajout d'un administrateur</h1>
      <form @submit.prevent="envoyer">
        <div class="mb-3">
          <label for="nom_A" class="form-label">Nom</label>
          <input v-model="administrateur.nom_A" type="text" class="form-control" id="nom_A" required>
        </div>
        <div class="mb-3">
          <label for="prenom_A" class="form-label">Prénom</label>
          <input v-model="administrateur.prenom_A" type="text" class="form-control" id="prenom_A" required>
        </div>
        <div class="mb-3">
          <label for="specialite_A" class="form-label">Spécialité</label>
          <input v-model="administrateur.specialite_A" type="text" class="form-control" id="specialite_A" required>
        </div>
        <div class="mb-3">
          <label for="num_Tel_A" class="form-label">Numéro de téléphone</label>
          <input v-model="administrateur.num_Tel_A" type="tel" class="form-control" id="num_Tel_A" required
                 pattern="^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$"
                 placeholder="(000) 000-0000 ou 000-000-0000">
        </div>
        <div class="mb-3">
          <label for="couriel_A" class="form-label">Courriel</label>
          <input v-model="administrateur.couriel_A" type="email" class="form-control" id="couriel_A" required>
        </div>
        <div class="mb-3">
          <label for="disponibilite_A" class="form-label">Disponibilité</label>
          <select v-model="administrateur.disponibilite_A" class="form-select" id="disponibilite_A" required>
            <option value="Disponible">Disponible</option>
            <option value="Occupe">Occupé</option>
            <option value="Indisponible">Indisponible</option>
            <option value="En pause">En pause</option>
            <option value="Rendez-vous complet">Rendez-vous complet</option>
            <option value="En ligne">En ligne</option>
            <option value="En retard">En retard</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="mot_de_passe" class="form-label">Mot de passe</label>
          <input v-model="administrateur.mot_de_passe" type="password" class="form-control" id="mot_de_passe" required>
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </main>
  </template>
  
  <script setup>

  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
 
  const router = useRouter()

  const administrateur = ref({
    nom_A: null,
    prenom_A: null,
    specialite_A: null,
    num_Tel_A: null,
    couriel_A: null,
    disponibilite_A: 'Disponible',
    mot_de_passe: null
  });
  
  const envoyer = () => {
  const url = import.meta.env.VITE_SERVER_URL + '/administrateurs';
  axios.post(url, administrateur.value)
    .then(res => {
      console.log('Administrateur ajouté avec succès:', res);
      router.push('/administrateurs'); // Redirige vers la page d'accueil après l'ajout
    })
    .catch(err => console.error('Erreur lors de l\'ajout:', err));
}
  </script>
  