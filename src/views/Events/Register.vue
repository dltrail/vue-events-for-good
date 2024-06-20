<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue';
const { event } = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  // if registration is successfull
  GStore.flashMessage = "You have registered for " + event.title
  setTimeout(() => {
    GStore.flashMessage = ""
  }, 3000)
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
