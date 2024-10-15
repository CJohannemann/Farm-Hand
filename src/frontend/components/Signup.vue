<template>
  <div class="login-form">
    <h2>Create an account</h2>
    <form>
      <div>
        <label for="email">Email:</label>
        <input type="email"  required />
      </div>

      <div>
        <label for="firstName">First Name:</label>
        <input type="firstName"  required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="lastName"  required />
      </div>
      <div>
        <label for="postalCode">Postal Code:</label>
        <input type="postalCode"  required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password"  required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password"  required />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login-form {
  max-width: 400px;
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