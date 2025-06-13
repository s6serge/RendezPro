<template>
    <main>
        <h1>Salle de Consultation : {{ salle.numero_S }}</h1>
        <h2>Détails :</h2>
        <ul>
            <li><strong>Numéro :</strong> {{ salle.numero_S }}</li>
            <li><strong>Étage :</strong> {{ salle.etage_S }}</li>
            <li><strong>Capacité :</strong> {{ salle.capacite_S }}</li>
            <li><strong>Disponibilité :</strong> {{ salle.dispon_S }}</li>
        </ul>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

// Récupérer l'ID depuis les paramètres de la route
const route = useRoute();
const { id } = route.params;

// Définir une référence pour stocker les données de la salle de consultation
const salle = ref({
    numero_S: '',
    etage_S: '',
    capacite_S: null,
    dispon_S: ''
});

// Charger les données de la salle avant le montage du composant
onBeforeMount(() => {
    const url = import.meta.env.VITE_SERVER_URL + '/salles/' + id;
    axios.get(url)
        .then(res => {
            salle.value = res.data.data;
        })
        .catch(err => {
            console.error("Erreur lors de la récupération des données de la salle :", err);
        });
});
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

ul {
    display: block;
    width: 100%;
}
</style>
