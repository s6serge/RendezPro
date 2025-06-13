<template>
    <main>
        <h1>Rendez-vous : {{ rendezVous.id_Rendez }}</h1>
        <h2>Détails :</h2>
        <ul>
            <li><strong>ID :</strong> {{ rendezVous.id_Rendez }}</li>
            <li><strong>Date :</strong> {{ rendezVous.date }}</li>
            <li><strong>Heure :</strong> {{ rendezVous.heure }}</li>
            <li><strong>Motif :</strong> {{ rendezVous.motif || 'Aucun motif spécifié' }}</li>
            <li><strong>Statut :</strong> {{ rendezVous.status }}</li>
        </ul>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

// Récupérer l'ID du rendez-vous depuis les paramètres de la route
const route = useRoute();
const { id } = route.params;

// Définir une référence pour stocker les données du rendez-vous
const rendezVous = ref({
    id_Rendez: '',
    date: '',
    heure: '',
    motif: '',
    status: ''
});

// Charger les données du rendez-vous avant le montage du composant
onBeforeMount(() => {
    const url = import.meta.env.VITE_SERVER_URL + '/rendezVous/' + id;
    axios.get(url)
        .then(res => {
            rendezVous.value = res.data.data;
        })
        .catch(err => {
            console.error("Erreur lors de la récupération des données du rendez-vous :", err);
        });
});
</script>

<style lang="css" scoped>
/* Vous pouvez ajouter des styles personnalisés si nécessaire */
</style>
