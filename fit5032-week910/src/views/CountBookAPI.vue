<template>
    <pre>{{ count }}</pre>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const count = ref('')
const error = ref('')
const getBookCount = async() => {
  try {
    const response = await axios.get('https://countbooks-gcbcnjj5za-uc.a.run.app');
    count.value = response.data;
  } catch (error) {
    console.error('Error fetching book count:', error);
    error.value = error;
    count.value = null;
  }
}

getBookCount()
</script>
  