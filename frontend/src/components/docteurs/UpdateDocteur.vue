<template>
    <main>
        <h1>Modifier les informations du docteur</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="docteur.nom_D" type="text" class="form-control" id="nom" required>
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input v-model="docteur.prenom_D" type="text" class="form-control" id="prenom" required>
            </div>
            <div class="mb-3">
                <label for="specialite" class="form-label">Spécialité</label>
                <input v-model="docteur.specialite_D" type="text" class="form-control" id="specialite" required>
            </div>
            <div class="mb-3">
                <label for="numTel" class="form-label">Numéro de téléphone</label>
                <input v-model="docteur.num_Tel_D" type="text" class="form-control" id="numTel" required>
            </div>
            <div class="mb-3">
                <label for="couriel" class="form-label">Email</label>
                <input v-model="docteur.couriel_D" type="email" class="form-control" id="couriel" required>
            </div>
            <div class="mb-3">
                <label for="disponibilite" class="form-label">Disponibilité</label>
                <select v-model="docteur.disponibilite_D" class="form-control" id="disponibilite">
                    <option>Disponible</option>
                    <option>Occupé</option>
                    <option>Indisponible</option>
                    <option>En pause</option>
                    <option>Rendez-vous complet</option>
                    <option>En ligne</option>
                    <option>En retard</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input type="file" class="form-control" id="photo" @change="handlePhotoUpload">
                <div v-if="docteur.photo" class="photo-preview">
                    <p></p>
                    <img :src="getPhotoUrl(docteur.photo)" alt="Photo du docteur" style="max-width: 150px; max-height: 150px; margin-top: 10px;">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Initialisation des données du docteur
const docteur = ref({
    nom_D: '',
    prenom_D: '',
    specialite_D: '',
    num_Tel_D: '',
    couriel_D: '',
    disponibilite_D: 'Disponible',
    photo: ''
});

// Récupérer l'ID du docteur depuis la route
const route = useRoute();
const router = useRouter();
const { id } = route.params;

// Fonction pour charger les informations du docteur
const chargerDocteur = () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/docteur/${id}`;
    axios.get(url)
        .then(res => {
            docteur.value = res.data.data;
        })
        .catch(err => console.error("Erreur lors de la récupération des informations :", err));
};

// Fonction pour gérer l'upload de la photo
// const handlePhotoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             docteur.value.photo = e.target.result.split(',')[1]; // Stocker la photo en Base64 (sans le préfixe)
//         };
//         reader.readAsDataURL(file);
//     }
// };

// Fonction pour gérer l'affichage de la photo
const getPhotoUrl = (photo) => {
    if (!photo) return '';
    return `data:image/jpeg;base64,${photo}`;
};

// Fonction pour envoyer les données mises à jour
const envoyer = () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/docteur/${id}`;
    axios.put(url, docteur.value)
        .then(() => {
            router.push('/docteur'); // Rediriger après la modification
        })
        .catch(err => console.error("Erreur lors de la mise à jour :", err));
};

// Charger les données lors de l'initialisation
onMounted(chargerDocteur);
</script>

<style lang="css" scoped>
main {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.mb-3 {
    margin-bottom: 15px;
}

.photo-preview img {
    display: block;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
</style>
