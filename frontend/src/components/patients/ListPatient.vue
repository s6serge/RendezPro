<template>
    <main>
        <h1>Liste des patients</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date de Naissance</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" :key="patient.id_Patient">
                    <td>{{ patient.id_Patient }}</td>
                    <td>{{ patient.nom_P }}</td>
                    <td>{{ patient.prenom_P }}</td>
                    <td>{{ patient.date_Nais_P }}</td>
                    <td>{{ patient.couriel_P }}</td>
                    <td>
                        <button @click="allerEditerPatient(patient.id_Patient)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsPatient(patient.id_Patient)" class="btn btn-success">Détails</button>
                        <button @click="supprimerPatient(patient.id_Patient)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutPatient" class="btn btn-primary">Ajouter</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des patients
const patients = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les patients
function lirePatients() {
    const url = import.meta.env.VITE_SERVER_URL + '/patients';
    axios.get(url)
        .then(res => {
            patients.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

// Fonction pour supprimer un patient
function supprimerPatient(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/patients/' + id;
    axios.delete(url)
        .then(() => {
            lirePatients(); // Rafraîchir la liste après suppression
        })
        .catch(err => {
            console.error(err);
        });
}

// Navigation vers la page d'édition
function allerEditerPatient(id) {
    router.push(`/patients/editer/${id}`);
}

// Navigation vers la page de détails
function allerDetailsPatient(id) {
    router.push(`/patients/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutPatient() {
    router.push('/patients/ajouter');
}

// Charger les patients avant que le composant ne soit monté
onBeforeMount(() => {
    lirePatients();
});
</script>

<style lang="css" scoped></style>
