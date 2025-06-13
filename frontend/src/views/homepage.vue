<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="home-page">
    <h1>Bienvenue dans le système de gestion de rendez vous médicale</h1>
    <p>Sélectionnez une catégorie pour commencer :</p>

    <div class="categories">
      <!-- Section Administrateurs -->
      <div class="category">
        <h2>Administrateurs</h2>
        <RouterLink to="/administrateurs" class="btn btn-primary">Liste des administrateurs</RouterLink>
        <RouterLink to="/administrateurs/ajouter" class="btn btn-secondary">Ajouter un administrateur</RouterLink>
      </div>

      <!-- Section Docteurs -->
      <div class="category">
        <h2>Docteurs</h2>
        <RouterLink to="/docteur" class="btn btn-primary">Liste des docteurs</RouterLink>
        <RouterLink to="/docteur/ajouter" class="btn btn-secondary">Ajouter un docteur</RouterLink>
      </div>

      <!-- Section Patients -->
      <div class="category">
        <h2>Patients</h2>
        <RouterLink to="/patients" class="btn btn-primary">Liste des patients</RouterLink>
        <RouterLink to="/patients/ajouter" class="btn btn-secondary">Ajouter un patient</RouterLink>
      </div>

      <!-- Section Services Médicaux -->
      <div class="category">
        <h2>Services Médicaux</h2>
        <RouterLink to="/services" class="btn btn-primary">Liste des services médicaux</RouterLink>
        <RouterLink to="/services/ajouter" class="btn btn-secondary">Ajouter un service médical</RouterLink>
      </div>

      <!-- Section Salles de Consultation -->
      <div class="category">
        <h2>Salles de Consultation</h2>
        <RouterLink to="/salles" class="btn btn-primary">Liste des salles</RouterLink>
        <RouterLink to="/salles/ajouter" class="btn btn-secondary">Ajouter une salle</RouterLink>
      </div>

      <!-- Section Rendez-vous -->
      <div class="category">
        <h2>Rendez-vous</h2>
        <RouterLink to="/rendezvous" class="btn btn-primary">Liste des rendez-vous</RouterLink>
        <RouterLink to="/rendezvous/ajouter" class="btn btn-secondary">Ajouter un rendez-vous</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 2em;
  padding: 1em;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
  margin-top: 2em;
}

.category {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.category h2 {
  margin-bottom: 1em;
  font-size: 1.5em;
  color: #333;
}

.btn {
  display: block;
  margin: 0.5em auto;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
