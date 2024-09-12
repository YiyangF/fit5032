<template>
    <div>
      <h1>Edit Book</h1>
      <form @submit.prevent="editBook">
        <div>
          <label for="bookId">Book ID:</label>
          <input type="text" v-model="bookId" id="bookId" required />
        </div>
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Edit Book</button>
      </form>
    </div>
</template>

  
<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { getDoc, doc, setDoc } from 'firebase/firestore';

export default {
  setup() {
    const bookId = ref('');
    const isbn = ref('');
    const name = ref('');

    const getBook = async () => {
      if (!bookId.value) {
        alert('Please enter a valid Book ID!');
        return;
      }
      try {
        const docRef = doc(db, "books", bookId.value);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          isbn.value = docSnap.data().isbn;
          name.value = docSnap.data().name;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Error getting book: ', error);
      }    
    };

    const editBook = async () => {
      if (!bookId.value) {
        alert('Please enter a valid Book ID!');
        return;
      }
      try {
        await setDoc(doc(db, 'books', bookId.value), {
          isbn: Number(isbn.value),
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book updated successfully!');
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    };

    return {
      bookId,
      isbn,
      name,
      editBook,
      getBook
    };
  }
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