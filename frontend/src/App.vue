<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- Liens à gauche -->
        <div class="nav-left">
          <RouterLink to="/">Accueil</RouterLink>
        </div>

        <!-- Liens à droite -->
        <div class="nav-right">
          <span v-if="token">
            <button @click="deconnecter" class="btn btn-link">Se déconnecter</button>
          </span>
          <span v-else>
            <RouterLink to="/Login">Se connecter</RouterLink>
            <RouterLink to="/AddDocteur"> / Créer un compte</RouterLink>
          </span>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import useAuthStore from "@/stores/auth/authStore";

const { token, logout } = useAuthStore();

// Fonction pour se déconnecter
const deconnecter = () => {
  logout();
};
</script>

<style scoped>
/* Header styling */
header {
  background-color: #f8f9fa;
  padding: 1em 0;
  border-bottom: 1px solid #ddd;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1em;
}

nav {
  display: flex;
  justify-content: space-between; /* Séparer les éléments à gauche et à droite */
  align-items: center; /* Aligner les éléments verticalement */
}

/* Navigation à gauche */
.nav-left {
  display: flex;
  gap: 2em;
}

/* Navigation à droite */
.nav-right {
  display: flex;
  gap: 1.5em; /* Espacement entre les liens */
}

/* Liens */
a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Bouton pour déconnexion */
button {
  background: none;
  border: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  color: #0056b3;
  text-decoration: underline;
}

main {
  padding: 2em 1em;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
