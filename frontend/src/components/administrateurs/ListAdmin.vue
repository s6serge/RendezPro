<template>
    <main>
        <h1>Liste des administrateurs</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Spécialité</th>
                    <th>Email</th>
                    <th>Disponibilité</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="admin in administrateurs" :key="admin.id">
                    <td>{{ admin.id }}</td>
                    <td>{{ admin.nom_A }}</td>
                    <td>{{ admin.prenom_A }}</td>
                    <td>{{ admin.specialite_A }}</td>
                    <td>{{ admin.couriel_A }}</td>
                    <td>{{ admin.disponibilite_A }}</td>
                    <td>
                        <button @click="allerEditerAdministrateur(admin.id)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsAdministrateur(admin.id)" class="btn btn-success">Détails</button>
                        <button @click="supprimerAdministrateur(admin.id)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutAdministrateur" class="btn btn-primary">Ajouter</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des administrateurs
const administrateurs = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les administrateurs
function lireAdministrateurs() {
    const url = import.meta.env.VITE_SERVER_URL + '/administrateurs';
    axios.get(url)
        .then(function(res) {
            console.log(res);
            administrateurs.value = res.data.data;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Fonction pour supprimer un administrateur
function supprimerAdministrateur(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/administrateurs/' + id;
    axios.delete(url)
        .then(function(res) {
            lireAdministrateurs(); // Rafraîchir la liste après suppression
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Navigation vers la page d'édition
function allerEditerAdministrateur(id) {
    router.push(`/administrateurs/editer/${id}`);
}

// Navigation vers la page de détails
function allerDetailsAdministrateur(id) {
    router.push(`/administrateurs/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutAdministrateur() {
    router.push('/administrateurs/ajouter');
}
// Charger les administrateurs avant que le composant ne soit monté
onBeforeMount(() => {
    lireAdministrateurs();
});
</script>

<style lang="css" scoped></style>
