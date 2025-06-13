<template>
  <div class="login-container">
    <h2 class="mb-4 text-center">Connexion</h2>
    <form @submit.prevent="connecter">
      <!-- Champ couriel_A -->
      <div class="mb-3">
        <label for="couriel_A" class="form-label">couriel_A</label>
        <input
          type="couriel_A"
          class="form-control"
          id="couriel_A"
          v-model="loginInfo.couriel_A"
          :class="{ 'is-invalid': erreurs.couriel_A }"
          required
        />
        <div v-if="erreurs.couriel_A" class="invalid-feedback">
          {{ erreurs.couriel_A }}
        </div>
      </div>

      <!-- Champ Mot de passe -->
      <div class="mb-3">
        <label for="mot_de_passe" class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="mot_de_passe"
          v-model="loginInfo.mot_de_passe"
          :class="{ 'is-invalid': erreurs.mot_de_passe }"
          required
        />
        <div v-if="erreurs.mot_de_passe" class="invalid-feedback">
          {{ erreurs.mot_de_passe }}
        </div>
      </div>

      <!-- Bouton Soumettre -->
      <button type="submit" class="btn btn-primary w-100">Se connecter</button>
    </form>

    <!-- Lien vers la création de compte -->
    <RouterLink to="/AddAdmin" class="mt-3 d-block text-center">
      Nouveau ? Créer un compte.
    </RouterLink>
  </div>
</template>

<!-- <script setup>
import { ref } from "vue";
import useAuth from "@/services/auth/serviceAuth";
import useAuthStore from "@/stores/auth/authStore";
import { useRouter } from "vue-router";

// Import des fonctions du store et service
const { login } = useAuth();
const { setUser, setToken } = useAuthStore();

const router = useRouter();

// Formulaire de connexion
const loginInfo = ref({
  couriel_A: "", // Correction du champ courriel
  mot_de_passe: "",
});

// Gestion des erreurs de validation
const erreurs = ref({});

// Fonction de connexion
const connecter = async () => {
  erreurs.value = {}; // Réinitialiser les erreurs
  try {
    const res = await login(loginInfo.value);
    setToken(res.token);
    setUser(res.data);

    // Rediriger vers la page d'accueil après connexion
    router.push("/");
  } catch (err) {
    const backendErrors = err.response?.data?.errors || [];
    if (backendErrors.length) {
      backendErrors.forEach((error) => {
        erreurs.value[error.path] = error.msg;
      });
    } else {
      // Erreur générique si aucune validation précise n'est renvoyée
      erreurs.value.general = "Connexion échouée. Vérifiez vos identifiants.";
    }
  }
};
</script> -->



<script setup>
import { ref } from "vue";
import useAuth from "@/services/auth/serviceAuth";
import useAuthStore from "@/stores/auth/authStore";
import { useRouter } from "vue-router";

const { login } = useAuth();
const { setUser, setToken } = useAuthStore();

const loginInfo = ref({
  couriel_A: "",
  mot_de_passe: "",
});

const erreurs = ref({});

const router = useRouter();

const connecter = () => {
  erreurs.value = {}; // Réinitialiser les erreurs
  login(loginInfo.value) // Appel de l'API de connexion
    .then((res) => {
      setToken(res.token);
      setUser(res.data);
      router.push("/"); // Redirige après une connexion réussie
    })
    .catch((err) => {
      const backendErrors = err.response.data.errors || [];
      backendErrors.forEach((error) => {
        erreurs.value[error.path] = error.msg;
      });
    });
};

</script>




<style scoped>
.login-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}

.invalid-feedback {
  font-size: 0.875rem;
  color: red;
}

button {
  font-size: 1rem;
  font-weight: bold;
}
</style>
