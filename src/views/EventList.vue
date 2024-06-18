<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService'

const events = ref(null)
const props = defineProps(['page'])
const page = computed(() => props.page)
const totalEvents = ref(0)
const eventsPerPage = 3

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / eventsPerPage)
  return page.value < totalPages
})

const pagination = computed(() => {
  return Math.ceil(totalEvents.value / eventsPerPage)
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
  </div>
  <div id="pagination">
    <div class="pagination__button prev">
      <router-link id="page-prev" :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1">
        Previous
      </router-link>
    </div>
    <div class="pagination__button numbers">
      <router-link id="page-numbers" v-for="(p, i) in  pagination " :key="i" :class="{ 'active': p === page }"
        :to="{ name: 'event-list', query: { page: p } }" rel="page 1">{{ p }}</router-link>

    </div>
    <div class="pagination__button next">
      <router-link id="page-next" :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next"
        v-if="hasNextPage">Next</router-link>
    </div>
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  position: relative;
}

#pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  bottom: 0; */
}

.pagination__button {
  min-width: 70px;
}

#page-prev {
  display: inline-block;
  margin-right: 10px;
}

/* #page-next-container {
  min-width: 50px;
} */

#page-next {
  display: inline-block;
  margin-left: -5px;

}

#page-next.hide {
  visibility: hidden;
}

#page-numbers {
  display: inline-block;
  border: 1px solid black;
  padding: 5px 10px;
  margin-inline: 2px;
}

#page-numbers.active {
  border: 2px solid hsla(160, 100%, 37%, 1);
  font-weight: bold;
}
</style>
