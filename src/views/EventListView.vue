<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref, computed } from 'vue';
import EventService from '@/services/EventService'

const events = ref(null)
const props = defineProps(['page'])
const page = computed(() => props.page)

onMounted(() => {
  EventService.getEvents(1, page.value)
    .then((res) => {
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

    <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1">Prev</router-link>
    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">Next</router-link>

  </div>

</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
