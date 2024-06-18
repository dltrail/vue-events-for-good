<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(['event'])
</script>

<template>
  <div class="event-details" v-if="event">
    <!-- <span class="event-tag">{{ event.category }}</span> -->
    <p>{{ event.description }}</p>
    <p>{{ event.location }}</p>
    <p>@{{ event.time }}</p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.5em;
}
</style>