<script lang="ts">

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>


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
