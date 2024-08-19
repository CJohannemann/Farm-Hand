<template>
  <footer>
    <p>© 2024 Farming Website</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style scoped>
footer {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
