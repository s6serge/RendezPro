import axios from "axios";
import useAuthStore from '@/stores/auth/authStore.js'
// Ajouter l'url de base par defaut a axios
const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

// //Recuperer automatiquement le token apres authentification

http.interceptors.request.use(config => {
    //Recuperer le token depuis le store
    const { currentToken: token } = useAuthStore()
    
    //Ajouter le token a la requete
    config.headers = {
        'Authorization': token ? `Bearer ${token}` : '',
    }

    return config
})


// // Vous pouvez intercepter les requêtes ou réponses si nécessaire
// http.interceptors.request.use(
//   (config) => {
//     // Par exemple, ajouter un token d'authentification
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


export default http









