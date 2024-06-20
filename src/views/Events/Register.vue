<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
// const props = defineProps(['event'])
const router = useRouter()

const register = () => {
  // if registration is successfull
  router.replace({
    name: 'event-details'
  })
}
</script>

<template>
  <p>Register for event</p>
  <button @click="register">Register Me</button>
</template>

<style scoped>
button {
  padding: 10px 20px;
  margin: 20px;
  background-color: var(--base-green);
  color: white;
  border: none;
  letter-spacing: 1px;
  font-weight: bold;
}

button:hover {
  padding: 10px 20px;
  margin: 20px;
  color: var(--base-green);
  background-color: white;
  border: 2px solid var(--base-green);
}
</style>
