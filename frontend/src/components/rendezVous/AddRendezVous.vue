<template>
    <main>
        <h1>Ajout d'un Rendez-vous</h1>
        <form @submit.prevent="envoyerRendezVous">
            <div class="mb-3">
                <label for="date" class="form-label">Date du Rendez-vous</label>
                <input v-model="rendezVous.date" type="date" class="form-control" id="date" required>
            </div>
            <div class="mb-3">
                <label for="heure" class="form-label">Heure du Rendez-vous</label>
                <input v-model="rendezVous.heure" type="time" class="form-control" id="heure" required>
            </div>
            <div class="mb-3">
                <label for="motif" class="form-label">Motif</label>
                <input v-model="rendezVous.motif" type="text" class="form-control" id="motif">
            </div>
            <div class="mb-3">
                <label for="status" class="form-label">Statut</label>
                <select v-model="rendezVous.status" class="form-select" id="status" required>
                    <option value="en attente">En attente</option>
                    <option value="confirmé">Confirmé</option>
                    <option value="annulé">Annulé</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter Rendez-vous</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const rendezVous = ref({
    date: '',
    heure: '',
    motif: '',
    status: 'en attente'
});

const envoyerRendezVous = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/rendezVous';
    axios.post(url, rendezVous.value)
        .then(res => {
            console.log("Rendez-vous ajouté avec succès :", res);
            router.push('/rendezvous'); // Redirige vers la liste des rendez-vous
        })
        .catch(err => console.error("Erreur lors de l'ajout du rendez-vous :", err));
};
</script>

<style lang="css" scoped>
/* Ajoutez des styles spécifiques si nécessaire */
</style>
