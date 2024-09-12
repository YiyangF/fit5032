<template>
    <div class="wrapper">
      <div class="center-content">
        <h1>Delete Book</h1>
        <form @submit.prevent="deleteBook">
          <div>
            <label for="bookId">Book ID:</label>
            <input type="text" v-model="bookId" id="bookId" required />
          </div>
          <button type="submit">Delete Book</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import db from '../firebase/init.js';
  import { doc, deleteDoc } from 'firebase/firestore';
  
  export default {
    setup() {
      const bookId = ref('');
  
      const deleteBook = async () => {
        if (!bookId.value) {
          alert('Please enter a valid Book ID!');
          return;
        }
        try {
          const docRef = doc(db, 'books', bookId.value);
          await deleteDoc(docRef);
  
          bookId.value = '';
          alert('Book deleted successfully!');
        } catch (error) {
          console.error('Error deleting book: ', error);
          alert('Failed to delete the book. Please check the Book ID.');
        }
      };
  
      return {
        bookId,
        deleteBook
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

input[type="text"] {
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
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #d32f2f;
}
</style>
