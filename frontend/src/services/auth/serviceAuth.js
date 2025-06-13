// // Importer notre copie d'axios
// // Importer notre copie d'axios
//  import http from "/src/services/auth/axiosAPI.js";
// //import http from "/src/services/auth/axiosAPI.js?t=1734301848097";
// const useAuth = () => {
//     const login = async (infoLogin) => {
//         try {
//             const response = await http.post(`/login`, infoLogin);
//             return response.data;
//         } catch (error) {
//             console.error("Erreur lors de la connexion :", error);
//             throw error; // Relancer l'erreur pour permettre un traitement ailleurs
//         }
//     };

//     return { login };
// };

// export default useAuth;




// Importer notre copie d'axios
// Importer notre copie d'axios
import http from "/src/services/auth/axiosAPI.js?t=1734306690878";
//import http from "/src/services/auth/axiosAPI.js?t=1734301848097";
const useAuth = () => {
    const login = async (infoLogin) => {
        try {
            const response = await http.post(`/login`, infoLogin);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            throw error;
            // Relancer l'erreur pour permettre un traitement ailleurs
        }
    }
    ;

    return {
        login
    };
}
;

export default useAuth;



// import http from "/src/services/auth/axiosAPI.js";

// const useAuth = () => {
//     const login = async (infoLogin) => {
//         try {
//             const response = await http.post(`/login`, infoLogin);
//             return response.data;
//         } catch (error) {
//             console.error("Erreur lors de la connexion :", error);
//             throw error; // Relancer l'erreur pour permettre un traitement ailleurs
//         }
//     };

//     return {
//         login
//     };
// };

// export default useAuth;

