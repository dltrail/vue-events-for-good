<script setup>
import EventCard from '@/components/EventCard.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const events = ref(null)

onMounted(() => {
  axios.get('https://my-json-server.typicode.com/dltrail/real-word-vue-3/events').then((res) => {
    events.value = res.data
  }).catch((err) => {
    console.log(err)
  })
})



</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
