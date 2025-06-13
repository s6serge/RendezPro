<template>
    <main>
        <h1>Ajout d'un service médical</h1>
        <form @submit.prevent="envoyerService">
            <div class="mb-3">
                <label for="nom_S" class="form-label">Nom du service</label>
                <input v-model="service.nom_S" type="text" class="form-control" id="nom_S" required>
            </div>
            <div class="mb-3">
                <label for="description_S" class="form-label">Description</label>
                <textarea v-model="service.description_S" class="form-control" id="description_S" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter Service</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const service = ref({
    nom_S: '',
    description_S: ''
});

const envoyerService = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/services';
    axios.post(url, service.value)
        .then(res => {
            console.log('Service médical ajouté avec succès:', res);
            router.push('/services'); // Redirige vers la liste des services
        })
        .catch(err => console.error('Erreur lors de l\'ajout du service médical:', err));
};
</script>

<style lang="css" scoped>
/* Ajoutez des styles spécifiques si nécessaire */
</style>
