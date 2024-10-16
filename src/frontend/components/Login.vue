<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <input v-model="emailAddress" placeholder="Email Address" required />
      </div>
      <div>
        <input type="password"  placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";

const emailAddress = ref('');
console.log(emailAddress)
const users = ref([
    {Email:'cjohannemann@gaig.com', FirstName: 'Chris', LastName: 'Johannemann', PostalCode: '41051'},
    {Email:'clanglitz@gaig.com', FirstName: 'Curtis', LastName: 'Langlitz', PostalCode: '45202'},
    {Email:'jfouchey@gaig.com', FirstName: 'Josh', LastName: 'Fouchey', PostalCode: '45202'}
]);

const router = useRouter();
function handleSubmit() {
  const user = users.value.find(user => user.Email === emailAddress.value);
  if (user) {
    const userString = encodeURIComponent(JSON.stringify(user));
    router.push({ name: 'UserLandingPage', params: { user: userString } });
  } else {
    alert('User not found');
  }
}
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
