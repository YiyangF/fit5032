<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userAuthenticate } from '../router/authenticate';
import { signOut, getAuth } from 'firebase/auth';


const { isAuthenticated } = userAuthenticate();
const router = useRouter();

const logout = () => {
  isAuthenticated.value = false;
  alert("logout");
  router.push({name: 'Home'}); 
};

const auth = getAuth();
const firebaselogout = () => {
  signOut(auth).then(() =>{
    alert("Signout")
  }).catch((error) => {
    console.log("Signout failed", error)
  });
};
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Admin" class="nav-link" active-class="active">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active" @click="logout">Logout</button>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active" @click="firebaselogout">FirebaseLogout</button>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link" active-class="active">Book List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/editbook" class="nav-link" active-class="active">Edit Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/deletebook" class="nav-link" active-class="active">Delete Book</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
