<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3>
      My name is Yiyang Feng
    </h3>
  </div>
</template>

<style scoped>
.greetings h3 {
  text-align: center;
}

</style>
