<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue';
import EventService from '@/services/EventService'
import { RouterLink } from 'vue-router'

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
    <span class="event-tag">{{ event.category }}</span>

    <nav id="nav">
      <router-link id="nav-link" :to="{ name: 'event-details' }" rel="details">
        Details
      </router-link> |
      <router-link id="nav-link" :to="{ name: 'event-register' }" rel="register">
        Register
      </router-link> |
      <router-link id="nav-link" :to="{ name: 'event-edit' }" rel="edit">
        Edit
      </router-link>
    </nav>
    <router-view :event="event" />
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
  padding: 50px 0;
}
</style>