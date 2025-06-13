<template>
    <main>
        <h1>Service Médical : {{ service.nom_S }}</h1>
        <h2>Description :</h2>
        <p>{{ service.description_S }}</p>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

// Récupérer l'ID depuis les paramètres de la route
const route = useRoute();
const { id } = route.params;

// Définir une référence pour stocker les données du service médical
const service = ref({
    nom_S: '',
    description_S: ''
});

// Charger les données du service médical avant le montage du composant
onBeforeMount(() => {
    const url = import.meta.env.VITE_SERVER_URL + '/services/' + id;
    axios.get(url)
        .then(res => {
            service.value = res.data.data;
        })
        .catch(err => {
            console.error("Erreur lors de la récupération des données du service médical :", err);
        });
});
</script>

<style lang="css" scoped>
/* Ajoutez des styles si nécessaire */
</style>

