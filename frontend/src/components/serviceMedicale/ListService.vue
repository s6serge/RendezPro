<template>
    <main>
        <h1>Liste des Services Médicaux</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in services" :key="service.id_Service">
                    <td>{{ service.id_Service }}</td>
                    <td>{{ service.nom_S }}</td>
                    <td>{{ service.description_S }}</td>
                    <td>
                        <button @click="allerEditerService(service.id_Service)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsService(service.id_Service)" class="btn btn-success">Détails</button>
                        <button @click="supprimerService(service.id_Service)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutService" class="btn btn-primary">Ajouter</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des services
const services = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les services médicaux
function lireServices() {
    const url = import.meta.env.VITE_SERVER_URL + '/services';
    axios.get(url)
        .then(res => {
            services.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

// Fonction pour supprimer un service médical
function supprimerService(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/services/' + id;
    axios.delete(url)
        .then(() => {
            lireServices(); // Rafraîchir la liste après suppression
        })
        .catch(err => {
            console.error(err);
        });
}

// Navigation vers la page d'édition
function allerEditerService(id) {
    router.push(`/services/editer/${id}`);
}

// Navigation vers la page de détails
function allerDetailsService(id) {
    router.push(`/services/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutService() {
    router.push('/services/ajouter');
}

// Charger les services avant que le composant ne soit monté
onBeforeMount(() => {
    lireServices();
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
