<template>
    <main>
        <h1>Ajout d'un service médical</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom du service</label>
                <input v-model="service.nom_S" type="text" class="form-control" id="nom" required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea v-model="service.description_S" class="form-control" id="description" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Initialisation des données du service médical
const service = ref({
    nom_S: '',
    description_S: ''
});

// Utilisation du router pour la redirection
const router = useRouter();

// Fonction pour envoyer les données
const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/serviceMedical';
    axios.post(url, service.value)
        .then(res => {
            console.log(res);
            router.push('/services-medicaux'); // Rediriger après l'ajout
        })
        .catch(err => console.log(err));
};
</script>

<style lang="css" scoped>
/* Style pour aligner avec le reste de l'application */
main {
    max-width: 600px;
    margin: 2em auto;
    padding: 1em;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}

h1 {
    text-align: center;
    margin-bottom: 1em;
}

button {
    display: block;
    width: 100%;
}
</style>
