<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()

defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
const goHome = () => {
  router.push({
    name: 'event-list'
  })
}
</script>

<template>
  <div id="not-found">
    <h1>Oops... This is akward</h1>
    <p>We can't find the {{ resource }} you're looking for.</p>
    <p>
      It's ok though, click on the button below to get back to somewhre familiar</p>
    <button @click="goHome">Get me out of here</button>
  </div>
</template>

<style scoped>
#not-found {
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%)
}

h1 {
  font-size: 5em;
  font-weight: 600;
  padding: 30px 0;
}

p {
  font-size: 2em;
}

button {
  margin: 30px 0;
}
</style>
