<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService'

const events = ref(null)
const props = defineProps(['page'])
const page = computed(() => props.page)
const totalEvents = ref(0)
const eventsPerPage = 2


const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})


onMounted(() => { // only called on initial load so wrap api call in watchEffect
  watchEffect(() => { // when reactive components change, api call happens again
    events.value = null // clears events from page so if there is latency the app doesnt hang
    EventService.getEvents(eventsPerPage, page.value)
      .then((res) => {
        events.value = res.data
        totalEvents.value = res.headers['x-total-count']

      }).catch((err) => {
        console.log(err)
      })
  })
})

</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div id="pagination"> <router-link id="page-prev" :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev"
        v-if="page != 1">
        <span>&#8592</span> Previous</router-link>
      <router-link id="page-next" :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next"
        v-if="hasNextPage">Next <span>&#8594</span> </router-link>
    </div>
  </div>

</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#pagination {
  display: flex;
  justify-content: space-between;
}
</style>
