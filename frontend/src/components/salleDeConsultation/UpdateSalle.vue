<template>
    <main>
        <h1>Ajout d'une salle de consultation</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="numero" class="form-label">Numéro de la salle</label>
                <input v-model="salleConsultation.numero_S" type="text" class="form-control" id="numero" required>
            </div>
            <div class="mb-3">
                <label for="etage" class="form-label">Étage</label>
                <input v-model="salleConsultation.etage_S" type="text" class="form-control" id="etage" required>
            </div>
            <div class="mb-3">
                <label for="capacite" class="form-label">Capacité</label>
                <input v-model="salleConsultation.capacite_S" type="number" class="form-control" id="capacite" required>
            </div>
            <div class="mb-3">
                <label for="disponibilite" class="form-label">Disponibilité</label>
                <select v-model="salleConsultation.dispon_S" class="form-control" id="disponibilite" required>
                    <option value="Disponible">Disponible</option>
                    <option value="Occupée">Occupée</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Initialisation des données de la salle de consultation
const salleConsultation = ref({
    numero_S: '',
    etage_S: '',
    capacite_S: null,
    dispon_S: ''
});

// Utilisation du router pour la redirection
const router = useRouter();

// Fonction pour envoyer les données
const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/salleConsultation';
    axios.post(url, salleConsultation.value)
        .then(res => {
            console.log(res);
            router.push('/salles-consultation'); // Rediriger après l'ajout
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
