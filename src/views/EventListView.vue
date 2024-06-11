<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue';
const events = ref(
  [{
    id: 5928101,
    category: 'animal welfare',
    title: 'cat',
    description: 'description',
    location: 'a place',
    date: 'January 2012',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Phet Laady'
  },
  {
    id: 5928102,
    category: 'animal welfare',
    title: 'cat',
    description: 'description',
    location: 'a place',
    date: 'January 2012',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Phet Laady'
  },
  {
    id: 5928103,
    category: 'animal welfare',
    title: 'cat',
    description: 'description',
    location: 'a place',
    date: 'January 2012',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Phet Laady'
  }]
)

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
