<template>
  <div class="card">
    <DataTable :value="books" tableStyle="min-width: 50rem">
      <Column field="isbn" header="ISBN"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="book id" header="Book ID">
        <template #body="slotProps">
          <p>{{ slotProps.data.id }}</p>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    DataTable,
    Column,
  },
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    fetchBooks();


    return {
      books
    };
  }
};
</script>

