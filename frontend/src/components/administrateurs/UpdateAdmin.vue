<template>
    <main>
        <h1>Ajout d'un administrateur</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="administrateur.nom_A" type="text" class="form-control" id="nom" required>
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input v-model="administrateur.prenom_A" type="text" class="form-control" id="prenom" required>
            </div>
            <div class="mb-3">
                <label for="specialite" class="form-label">Spécialité</label>
                <input v-model="administrateur.specialite_A" type="text" class="form-control" id="specialite" required>
            </div>
            <div class="mb-3">
                <label for="numTel" class="form-label">Numéro de téléphone</label>
                <input v-model="administrateur.num_Tel_A" type="text" class="form-control" id="numTel" required>
            </div>
            <div class="mb-3">
                <label for="couriel" class="form-label">Email</label>
                <input v-model="administrateur.couriel_A" type="email" class="form-control" id="couriel" required>
            </div>
            <div class="mb-3">
                <label for="disponibilite" class="form-label">Disponibilité</label>
                <select v-model="administrateur.disponibilite_A" class="form-control" id="disponibilite">
                    <option>Disponible</option>
                    <option>Occupé</option>
                    <option>Indisponible</option>
                    <option>En pause</option>
                    <option>Rendez-vous complet</option>
                    <option>En ligne</option>
                    <option>En retard</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="motDePasse" class="form-label">Mot de passe</label>
                <input v-model="administrateur.mot_de_passe" type="password" class="form-control" id="motDePasse" required>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const administrateur = ref({
    nom_A: '',
    prenom_A: '',
    specialite_A: '',
    num_Tel_A: '',
    couriel_A: '',
    disponibilite_A: 'Disponible',
    mot_de_passe: ''
});

const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/administrateurs';
    axios.post(url, administrateur.value)
        .then(res => {
            console.log(res);
            router.push('/administrateurs'); // Rediriger après l'ajout
        })
        .catch(err => console.log(err));
};
</script>

<style lang="css" scoped></style>
