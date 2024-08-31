import {ref} from 'vue'
import router from '../router/index'
const isAuthenticated = ref (false)

export function userAuthenticate() {
    console.log('isAuthenticated before:', isAuthenticated.value);
    const login = () => {
        isAuthenticated.value = true;
        console.log("User logged in:", isAuthenticated.value);
    }

    const logout = () => {
        isAuthenticated.value = false;
        console.log("User logged out:", isAuthenticated.value);
    }

    return {isAuthenticated, login, logout}
}