<script setup>
import { onMounted, ref } from 'vue';
import EventService from '@/services/EventService'

const event = ref(null)

const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((res) => {
      event.value = res.data
    }).catch((err) => {
      console.log(err)
    })
})

</script>

<template>
  <div class="event-details" v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link id="nav__link" :to="{ name: 'event-details', params: { id } }" rel="details">Details</router-link> |
      <router-link id="nav__link" :to="{ name: 'event-details', params: { id } }" rel="register">Register</router-link>
      |
      <router-link id="nav__link" :to="{ name: 'event-details', params: { id } }" rel="edit">Edit</router-link>
    </div>

    <span class="event-tag">{{ event.category }}</span>
    <p>{{ event.description }}</p>
    <p>{{ event.location }}</p>
    <p>@{{ event.time }}</p>


  </div>
</template>

<style scoped>
p {
  font-size: 1.5em;
}

.event-tag {
  display: inline-block;
  font: 8px;
  border: 1px solid blue;
  padding: 5px 10px;
  color: white;
  background-color: blue;
}

#nav {
  padding: 20px 0;
}
</style>