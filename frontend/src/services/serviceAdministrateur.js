//Importer notre copie d'axios
import http from "./auth/axiosAPI";

const useUser = () => {
    //Creer une fonction recupere la liste des users
    const getAllUsers = async () => {
        const users = await http.get(`/users`)
        // console.log('LA liste', users.data.data)
        return users.data
    }
    const deleteUser = async (id) => {
        await http.delete(`/users/${id}`)
    }

    const getUserById = async (id) => {
        const user = await http.get(`/users/${id}`)
        return user.data
    }
    const addUser = async (user) => {
        await http.post(`/users`, user)

    }

    const updateUser = async (id, user) => {
        await http.put(`/users/${id}`, user)

    }

    return { getAllUsers, deleteUser, getUserById, addUser, updateUser }
}

export default useUser