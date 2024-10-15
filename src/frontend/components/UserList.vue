<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  const response = await fetch('http://localhost:3000/users');
  users.value = await response.json();
});
</script>