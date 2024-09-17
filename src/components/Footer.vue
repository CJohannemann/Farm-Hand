<template>
  <footer>
    <p>© 2024 My Farm Hand</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
footer {
  color: black;
  background-color: #e8fbff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
