<template>
    <main>
        <h1>Ajout d'une salle de consultation</h1>
        <form @submit.prevent="envoyerSalle">
            <div class="mb-3">
                <label for="numero_S" class="form-label">Numéro de la salle</label>
                <input v-model="salle.numero_S" type="text" class="form-control" id="numero_S" required>
            </div>
            <div class="mb-3">
                <label for="etage_S" class="form-label">Étage</label>
                <input v-model="salle.etage_S" type="text" class="form-control" id="etage_S" required>
            </div>
            <div class="mb-3">
                <label for="capacite_S" class="form-label">Capacité</label>
                <input v-model="salle.capacite_S" type="number" class="form-control" id="capacite_S" required min="1">
            </div>
            <div class="mb-3">
                <label for="dispon_S" class="form-label">Disponibilité</label>
                <select v-model="salle.dispon_S" class="form-select" id="dispon_S" required>
                    <option value="Disponible">Disponible</option>
                    <option value="Occupée">Occupée</option>
                    <option value="En maintenance">En maintenance</option>
                    <option value="Fermée">Fermée</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter Salle</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const salle = ref({
    numero_S: '',
    etage_S: '',
    capacite_S: null,
    dispon_S: 'Disponible'
});

const envoyerSalle = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/salles';
    axios.post(url, salle.value)
        .then(res => {
            console.log("Salle de consultation ajoutée avec succès :", res);
            router.push('/salles'); // Redirige vers la liste des salles
        })
        .catch(err => console.error("Erreur lors de l'ajout de la salle de consultation :", err));
};
</script>

<style lang="css" scoped>
/* Ajoutez des styles spécifiques si nécessaire */
</style>
