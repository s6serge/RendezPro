<template>
  <main>
    <h1>Ajout d'un docteur</h1>
    <form @submit.prevent="envoyerDocteur">
      <!-- Champ Nom -->
      <div class="mb-3">
        <label for="nom_D" class="form-label">Nom</label>
        <input 
          v-model="docteur.nom_D" 
          type="text" 
          class="form-control" 
          id="nom_D" 
          required>
      </div>

      <!-- Champ Prénom -->
      <div class="mb-3">
        <label for="prenom_D" class="form-label">Prénom</label>
        <input 
          v-model="docteur.prenom_D" 
          type="text" 
          class="form-control" 
          id="prenom_D" 
          required>
      </div>

      <!-- Champ Spécialité -->
      <div class="mb-3">
        <label for="specialite_D" class="form-label">Spécialité</label>
        <input 
          v-model="docteur.specialite_D" 
          type="text" 
          class="form-control" 
          id="specialite_D" 
          required>
      </div>

      <!-- Champ Numéro de téléphone -->
      <div class="mb-3">
        <label for="num_Tel_D" class="form-label">Numéro de téléphone</label>
        <input 
          v-model="docteur.num_Tel_D" 
          type="tel" 
          class="form-control" 
          id="num_Tel_D" 
          required
          pattern="^(?:\\(\\d{3}\\)\\s?|\\d{3}[-\\s]?)\\d{3}[-\\s]?\\d{4}$"
          placeholder="(000) 000-0000 ou 000-000-0000">
      </div>

      <!-- Champ Courriel -->
      <div class="mb-3">
        <label for="couriel_D" class="form-label">Courriel</label>
        <input 
          v-model="docteur.couriel_D" 
          type="email" 
          class="form-control" 
          id="couriel_D" 
          required>
      </div>

      <!-- Champ Disponibilité -->
      <div class="mb-3">
        <label for="disponibilite_D" class="form-label">Disponibilité</label>
        <select 
          v-model="docteur.disponibilite_D" 
          class="form-select" 
          id="disponibilite_D" 
          required>
          <option value="Disponible">Disponible</option>
          <option value="Occupe">Occupé</option>
          <option value="Indisponible">Indisponible</option>
          <option value="En pause">En pause</option>
          <option value="Rendez-vous complet">Rendez-vous complet</option>
          <option value="En ligne">En ligne</option>
          <option value="En retard">En retard</option>
        </select>
      </div>

      <!-- Champ Photo
      <div class="mb-3">
        <label for="photo" class="form-label">Photo</label>
        <input 
          type="file" 
          class="form-control" 
          id="photo" 
          @change="handlePhotoUpload" 
          accept="image/*">
      </div> -->

      <!-- Prévisualisation de la photo -->
      <div v-if="docteur.photo" class="photo-preview">
        <h3>Prévisualisation de la photo :</h3>
        <img 
          :src="docteur.photo" 
          alt="Photo du docteur" 
          style="max-width: 200px; max-height: 200px;">
      </div>

      <!-- Bouton Soumettre -->
      <button type="submit" class="btn btn-primary">Ajouter Docteur</button>
    </form>
  </main>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const docteur = ref({
  nom_D: '',
  prenom_D: '',
  specialite_D: '',
  num_Tel_D: '',
  couriel_D: '',
  disponibilite_D: 'Disponible',
  photo: null
});

const photoFile = ref(null); // Stocke le fichier photo localement

// Gestion du téléchargement de la photo
const handlePhotoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    photoFile.value = file; // Stocke le fichier sélectionné
    console.log("Photo sélectionnée :", photoFile.value);
  }
};

// Soumission du formulaire
const envoyerDocteur = async () => {
  try {
    const url = `${import.meta.env.VITE_SERVER_URL}/docteur`;
    const formData = new FormData();

    // Ajout des champs dans FormData
    formData.append('nom_D', docteur.value.nom_D);
    formData.append('prenom_D', docteur.value.prenom_D);
    formData.append('specialite_D', docteur.value.specialite_D);
    formData.append('num_Tel_D', docteur.value.num_Tel_D);
    formData.append('couriel_D', docteur.value.couriel_D);
    formData.append('disponibilite_D', docteur.value.disponibilite_D);

    // Ajouter la photo uniquement si elle est sélectionnée
    if (photoFile.value) {
      formData.append('photo', photoFile.value);
    }

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Docteur ajouté avec succès:', response.data);
    router.push('/docteur'); // Redirige vers la liste des docteurs
  } catch (error) {
    if (error.response) {
      console.error('Erreur API :', error.response.data);
    } else {
      console.error('Erreur réseau ou autre :', error.message);
    }
  }
};
</script>


<style scoped>
.photo-preview img {
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
