<template>
    <main>
        <h1>Ajout d'un patient</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="patient.nom_P" type="text" class="form-control" id="nom" required>
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input v-model="patient.prenom_P" type="text" class="form-control" id="prenom" required>
            </div>
            <div class="mb-3">
                <label for="dateNais" class="form-label">Date de Naissance</label>
                <input v-model="patient.date_Nais_P" type="date" class="form-control" id="dateNais" required>
            </div>
            <div class="mb-3">
                <label for="adresse" class="form-label">Adresse</label>
                <input v-model="patient.adresse_P" type="text" class="form-control" id="adresse" required>
            </div>
            <div class="mb-3">
                <label for="numTel" class="form-label">Numéro de téléphone</label>
                <input v-model="patient.num_Tel_P" type="text" class="form-control" id="numTel" required>
            </div>
            <div class="mb-3">
                <label for="couriel" class="form-label">Email</label>
                <input v-model="patient.couriel_P" type="email" class="form-control" id="couriel" required>
            </div>
            <div class="mb-3">
                <label for="historique" class="form-label">Historique médical</label>
                <textarea v-model="patient.historique_P" class="form-control" id="historique" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Initialisation des données du patient
const patient = ref({
    nom_P: '',
    prenom_P: '',
    date_Nais_P: '',
    adresse_P: '',
    num_Tel_P: '',
    couriel_P: '',
    historique_P: ''
});

// Utilisation du router pour la redirection
const router = useRouter();

// Fonction pour envoyer les données
const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/patients';
    axios.post(url, patient.value)
        .then(res => {
            console.log(res);
            router.push('/patients'); // Rediriger vers la liste des patients après l'ajout
        })
        .catch(err => console.log(err));
};
</script>

<style lang="css" scoped></style>
