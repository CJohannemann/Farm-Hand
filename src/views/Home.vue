<template>
  <div>
    <p>Learn about sustainable farming practices and more.</p>
  </div>
        <CardComponents/>
  <div class="container">
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardComponents from '../components/CardComponents.vue';

export default defineComponent({
  name: "Home",
  components: {CardComponents},
});
</script>


<style scoped>
body{margin: 0;}
.container {
  margin-bottom: 7em;
}

div {
  padding: 2rem;
}
</style>
