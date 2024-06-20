<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(['event'])
</script>

<template>
  <div class="event-details" v-if="event">
    <!-- <span class="event-tag">{{ event.category }}</span> -->
    <p><span>location: {{ event.location }}</span> | <span>@ {{ event.time }}</span></p>

    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.5em;
}
</style>