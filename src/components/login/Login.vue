<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="form.username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="form.password" />
        <span v-if="!$v.form.password.required && $v.form.password.$dirty">Password is required</span>
        <span v-if="!$v.form.password.minLength && $v.form.password.$dirty">Password must be at least 6 characters</span>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

interface LoginForm {
  username: string;
  password: string;
}

const form = ref<LoginForm>({
  username: '',
  password: '',
});

const rules = {
  form: {
    username: { required },
    password: { required, minLength: minLength(6) }
  }
};

const $v = useVuelidate(rules, form);

const handleSubmit = () => {
  $v.value.$touch();
  if ($v.value.$invalid) {
    console.log('Form is invalid');
    return;
  }
  console.log('Form Submitted:', form.value);
  // Add your authentication logic here
};
</script>

<style scoped>
/* Add some basic styling */
form {
  max-width: 300px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div {
  margin-bottom: 1em;
}

label {
  margin-bottom: .5em;
  color: #333333;
  display: block;
}

input {
  border: 1px solid #CCCCCC;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
}

button:disabled {
  background-color: #CCCCCC;
}
</style>
