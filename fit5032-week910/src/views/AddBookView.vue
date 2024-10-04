<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

// import BookList from '../components/BookList.vue';

export default {
setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
    try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
        alert('ISBN must be a valid number');
        return;
        }

        await addDoc(collection(db, 'books'), {
        isbn: isbnNumber,
        name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
    } catch (error) {
        console.error('Error adding book: ', error);
    }
    };

    return {
    isbn,
    name,
    addBook
    };
},
// components: {
//     BookList
// }
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