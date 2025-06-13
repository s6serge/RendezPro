<template>
    <main>
        <h1>Liste des docteurs</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Spécialité</th>
                    <th>Courriel</th>
                    <th>Disponibilité</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="docteur in docteurs" :key="docteur.id_Docteur">
                    <td>{{ docteur.id_Docteur }}</td>
                    <td>{{ docteur.nom_D }}</td>
                    <td>{{ docteur.prenom_D }}</td>
                    <td>{{ docteur.specialite_D }}</td>
                    <td>{{ docteur.couriel_D }}</td>
                    <td>{{ docteur.disponibilite_D }}</td>
                    <td>
                        <div class="actions">
                            <button @click="allerEditerDocteur(docteur.id_Docteur)" class="btn btn-primary">Éditer</button>
                            <button @click="allerDetailsDocteur(docteur.id_Docteur)" class="btn btn-success">Détails</button>
                            <button @click="supprimerDocteur(docteur.id_Docteur)" class="btn btn-danger">Supprimer</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutDocteur" class="btn btn-primary ">Ajouter</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

const docteurs = ref([]);
const router = useRouter();

function lireDocteurs() {
    const url = import.meta.env.VITE_SERVER_URL + '/docteur';
    axios.get(url)
        .then(res => {
            docteurs.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

function supprimerDocteur(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/docteur/' + id;
    axios.delete(url)
        .then(() => {
            lireDocteurs();
        })
        .catch(err => {
            console.error(err);
        });
}

function allerEditerDocteur(id) {
    router.push(`/docteur/${id}`);
}

function allerDetailsDocteur(id) {
    router.push(`/docteur/details/${id}`);
}

function allerAjoutDocteur() {
    router.push('/docteur/ajouter');
}

onBeforeMount(() => {
    lireDocteurs();
});
</script>

<style lang="css" scoped>
main {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 26px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

tr:hover {
    background-color: #f9f9f9;
}

/* Alignement des boutons sur la même ligne */
.actions {
    display: flex;
    gap: 10px; /* Espacement entre les boutons */
    justify-content: center;
}

button {
    margin-right: 10px;
}

button:hover {
    cursor: pointer;
}

button.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

button.btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
}

button.btn-success {
    background-color: #28a745;
    border-color: #28a745;
}

button.btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
}

button.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
}

button.btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
}

button.btn-primary.add-btn {
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
}
</style>
