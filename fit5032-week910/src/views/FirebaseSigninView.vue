<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const adminEmail = "admin@gmail.com"
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      if (data.user.email == adminEmail){
        alert("Admin Login Successful!")
        router.push("/Admin")
      }else{
        console.log("Firebase Login Successful!")
        console.log("data", data)
        console.log("data.user", data.user)
        alert("Firebase Login Successful!")
        router.push("/") // Redirect to the homepage after successful login
        console.log(auth.currentUser) // To check the current User signed in  
      }
    })
    .catch((error) => {
      console.log(error.code);
      alert("Firebase Login failed!")
    })
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f5f5f5;
  }
  

  .center-content {
    text-align: center;
    background-color: white;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  

  input[type="text"], input[type="password"] {
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    width: 300px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>