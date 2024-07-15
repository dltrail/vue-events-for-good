<script setup>
import { ref } from 'vue';
import { useEventStore } from '@/stores/eventList';

const event = ref('')
const store = useEventStore()

function addEventAndClear(event) {
  // check input isn't empty
  if (event.length === 0) {
    console.log('Please enter a event')
    return
  }
  store.addEvent(event)
  event = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="addEventAndClear(event)">
      <input v-model="event" type="text" />
      <button>Add Event</button>
    </form>
  </div>
</template>

<style scoped></style>
