<template>
<div >
  <p>Welcome {{ id }}</p>
</div>
  <div>
    <h1>{{id2}}</h1>
<!--    <h1>Welcome, {{ user.FirstName }}</h1>-->
<!--    <p>Email: {{ user.Email }}</p>-->
<!--    <p>Last Name: {{ user.LastName }}</p>-->
<!--    <p>Postal Code: {{ user.PostalCode }}</p>-->
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref('');

onMounted(() => {
  id.value = <string>route.params.id;
});

</script>

<style scoped>

</style>