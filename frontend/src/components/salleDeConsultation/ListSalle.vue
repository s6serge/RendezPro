<template>
    <main>
        <h1>Liste des Salles de Consultation</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Numéro</th>
                    <th>Étage</th>
                    <th>Capacité</th>
                    <th>Disponibilité</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="salle in salles" :key="salle.id_Salle">
                    <td>{{ salle.id_Salle }}</td>
                    <td>{{ salle.numero_S }}</td>
                    <td>{{ salle.etage_S }}</td>
                    <td>{{ salle.capacite_S }}</td>
                    <td>{{ salle.dispon_S }}</td>
                    <td>
                        <button @click="allerEditerSalle(salle.id_Salle)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsSalle(salle.id_Salle)" class="btn btn-success">Détails</button>
                        <button @click="supprimerSalle(salle.id_Salle)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutSalle" class="btn btn-primary">Ajouter une Salle</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des salles
const salles = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les salles de consultation
function lireSalles() {
    const url = import.meta.env.VITE_SERVER_URL + '/salles';
    axios.get(url)
        .then(res => {
            salles.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

// Fonction pour supprimer une salle de consultation
function supprimerSalle(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/salles/' + id;
    axios.delete(url)
        .then(() => {
            lireSalles(); // Rafraîchir la liste après suppression
        })
        .catch(err => {
            console.error(err);
        });
}

// Navigation vers la page d'édition
function allerEditerSalle(id) {
    router.push(`/salles/editer/${id}`);
}

// Navigation vers la page de détails
function allerDetailsSalle(id) {
    router.push(`/salles/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutSalle() {
    router.push('/salles/ajouter');
}

// Charger les salles avant que le composant ne soit monté
onBeforeMount(() => {
    lireSalles();
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
