import './assets/main.css'; // Import de vos styles personnalisés

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Persistance du store
import piniaPersist from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
const pinia = createPinia();

// Lier la persistance du store
pinia.use(piniaPersist);

app.use(pinia); // Utilisation de Pinia
app.use(router); // Configuration du routeur

app.mount('#app'); // Montage de l'application
