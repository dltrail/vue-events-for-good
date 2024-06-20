<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
// import EventCard from './components/EventCard.vue'

const GStore = inject('GStore')

</script>

<template>
  <div id="layout">
    <p v-if="GStore.flashMessage" id="flash-message">{{ GStore.flashMessage }}</p>

    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>

      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

#flash-message {
  padding: 10px 20px;
  color: var(--base-green);
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
