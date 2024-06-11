<script setup>
import { onMounted, ref } from 'vue';
import EventService from '@/services/EventService'

const event = ref(null)
const id = ref(123)

onMounted(() => {
  EventService.getEvent(id)
    .then((res) => {
      event.value = res.data
    }).catch((err) => {
      console.log(err)
    })
})

</script>

<template>
  <h1>Events for Good</h1>
  <div class="event-details">
    <p>{{ event.title }}</p>
    <p>{{ event.time }}</p>
  </div>
</template>

<style scoped></style>