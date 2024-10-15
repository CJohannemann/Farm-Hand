<template>
  <div>
    <button @click="fetchContactInfo">Show Contact Info</button>
    <div v-if="contact">
      <p><strong>First Name:</strong> {{ contact.first_name }}</p>
      <p><strong>Last Name:</strong> {{ contact.last_name }}</p>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p><strong>Phone:</strong> {{ contact.phone }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const contact = ref(null);

const fetchContactInfo = async () => {
  try {
    const response = await axios.get('http://localhost:3000/contacts');
    contact.value = response.data;
  } catch (error) {
    console.error('There was an error fetching the contact info:', error);
  }
};
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
