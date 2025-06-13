<template>
    <main>
        <h1>Liste des Rendez-vous</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Motif</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rendezVous in rendezVousList" :key="rendezVous.id_Rendez">
                    <td>{{ rendezVous.id_Rendez }}</td>
                    <td>{{ rendezVous.date }}</td>
                    <td>{{ rendezVous.heure }}</td>
                    <td>{{ rendezVous.motif }}</td>
                    <td>{{ rendezVous.status }}</td>
                    <td>
                        <button @click="allerEditerRendezVous(rendezVous.id_Rendez)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsRendezVous(rendezVous.id_Rendez)" class="btn btn-success">Détails</button>
                        <button @click="supprimerRendezVous(rendezVous.id_Rendez)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutRendezVous" class="btn btn-primary">Ajouter un Rendez-vous</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des rendez-vous
const rendezVousList = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les rendez-vous
function lireRendezVous() {
    const url = import.meta.env.VITE_SERVER_URL + '/rendezVous';
    axios.get(url)
        .then(res => {
            rendezVousList.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

// Fonction pour supprimer un rendez-vous
function supprimerRendezVous(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/rendezVous/' + id;
    axios.delete(url)
        .then(() => {
            lireRendezVous(); // Rafraîchir la liste après suppression
        })
        .catch(err => {
            console.error(err);
        });
}

// Navigation vers la page d'édition
function allerEditerRendezVous(id) {
    router.push(`/rendezvous/editer/${id}`);
}

// Navigation vers la page de détails
function allerDetailsRendezVous(id) {
    router.push(`/rendezvous/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutRendezVous() {
    router.push('/rendezvous/ajouter');
}

// Charger les rendez-vous avant que le composant ne soit monté
onBeforeMount(() => {
    lireRendezVous();
});
</script>

<style lang="css" scoped>
/* Styles spécifiques pour la table */
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.table th {
    background-color: #f2f2f2;
}
</style>
