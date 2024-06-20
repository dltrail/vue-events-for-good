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

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div id="not-found">
    <h1>Uh-oh...</h1>
    <p class="h2">Our website is currently playing hide and seek with you. Unfortunately, it seems to be winning.</p>
    <p class="list-title">While we track it down, why not try one of these options? </p>
    <ul>
      <li>Check your Wi-Fi - Maybe it's taking a coffee break.</li>
      <li>Refresh the page - Sometimes it just needs a second chance.</li>
      <li>Talk to your router - Give it a pep talk or maybe a gentle reset.</li>
    </ul>

    <p class="list-title">Still no luck? Try these timeless classics: </p>
    <ul>
      <li>Blame it on the weather - Even if it’s sunny.</li>
      <li>Ask a tech-savvy friend - They love this kind of thing.</li>
      <li>Call your Internet Service Provider - They might know what's up.</li>
    </ul>


    <button @click="goBack">Try again</button>

  </div>
</template>

<style scoped>
#not-found {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-title {
  text-align: left;
  margin: 15px 0;
  font-weight: bold;
}

ul {
  text-align: justify;
}

h1 {
  font-size: 5em;
  font-weight: 600;
  padding: 30px 0;
}

.h2 {
  font-weight: bold;
  width: 100%;
  font-size: 1.5em;
}

button {
  margin: 30px 0;
}
</style>
