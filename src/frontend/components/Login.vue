<template>
  <div class="login-form">
    <h2>Login</h2>
    <form >
      <div>
        <input v-model="emailAddress" placeholder="Email Address" required />
      </div>
      <div>
        <input type="password"  placeholder="Password" required />
      </div>
      <div v-for="user in users" :key="user.id">
      <router-link :to="{name: 'UserLandingpage', params: {id: user.id}}">
        <button type="submit">Login</button>
      </router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emailAddress = ref('');
console.log(emailAddress)
const users = ref([
    {id:1, Email:'cjohannemann@gaig.com', FirstName: 'Chris', LastName: 'Johannemann', PostalCode: '41051'},
    {id:2, Email:'clanglitz@gaig.com', FirstName: 'Curtis', LastName: 'Langlitz', PostalCode: '45202'},
    {id:3, Email:'jfouchey@gaig.com', FirstName: 'Josh', LastName: 'Fouchey', PostalCode: '45202'}
]);

</script>


<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-form div {
  margin-bottom: 1em;
}
.login-form label {
  margin-bottom: .5em;
  color: #333333;
  display: block;
}
.login-form input {
  border: 1px solid #CCCCCC;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}
.login-form button {
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.login-form button:hover {
  background-color: #0056b3;
}
</style>
