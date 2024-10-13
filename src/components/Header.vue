<template>
  <header>
    <div class="container">
      <div class="top-nav">
        <div class="title">
          <a href="/"><h2>My Farm Hand</h2></a>
        </div>
        <div class="auth-buttons">
          <button @click="goToLogin" class="login">Login</button>
          <button class="signup">Sign Up</button>
        </div>
      </div>
    </div>
  </header>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const goToLogin = () => {
  router.push('/login');
}

</script>

<style scoped>
.top-nav {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.auth-buttons {
  position: absolute;
  padding-right: 5px;
  right: 0;
  display: flex;
  gap: 10px;
}

.login, .signup {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.login {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.signup {
  background-color: indianred;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
