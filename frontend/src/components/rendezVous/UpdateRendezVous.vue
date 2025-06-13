<template>
    <main>
        <h1>Ajout d'un rendez-vous</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="date" class="form-label">Date</label>
                <input v-model="rendezVous.date" type="date" class="form-control" id="date" required>
            </div>
            <div class="mb-3">
                <label for="heure" class="form-label">Heure</label>
                <input v-model="rendezVous.heure" type="time" class="form-control" id="heure" required>
            </div>
            <div class="mb-3">
                <label for="motif" class="form-label">Motif (optionnel)</label>
                <input v-model="rendezVous.motif" type="text" class="form-control" id="motif">
            </div>
            <div class="mb-3">
                <label for="status" class="form-label">Statut</label>
                <select v-model="rendezVous.status" class="form-control" id="status" required>
                    <option value="en attente">En attente</option>
                    <option value="confirmé">Confirmé</option>
                    <option value="annulé">Annulé</option>
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

// Initialisation des données du rendez-vous
const rendezVous = ref({
    date: '',
    heure: '',
    motif: '',
    status: 'en attente'
});

// Utilisation du router pour la redirection
const router = useRouter();

// Fonction pour envoyer les données
const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/rendezVous';
    axios.post(url, rendezVous.value)
        .then(res => {
            console.log(res);
            router.push('/rendezvous'); // Rediriger après l'ajout
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
