<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import {defineComponent } from 'vue';
import EventService from '@/services/EventService'
import router from '@/router';
import {EventItem} from '@/types'
// import { onMounted, ref, defineComponent, PropType } from 'vue';
// import { RouterLink } from 'vue-router'

export default defineComponent({
  props:{
    id:{
      type: String,
      required: true
    }
  },
  data(){
  return {
    event: {} as EventItem
  }},
  created(){
  EventService.getEvent(this.id)
    .then((res) => {
      this.event = res.data
    }).catch((err) => {
      // console.log(err)
      // router.push({
      //   name: 'not-found'
      // })

      if (err.response && err.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({
          name: 'network-error',
        })
      }


    })
  }
})

// const event = ref(null)
// const props = defineProps({
//   id: {
//     required: true
//   }
// })

// onMounted(() => {
//   EventService.getEvent(props.id)
//     .then((res) => {
//       event.value = res.data
//     }).catch((err) => {
//       // console.log(err)
//       // router.push({
//       //   name: 'not-found'
//       // })

//       if (err.response && err.response.status == 404) {
//         router.push({
//           name: '404Resource',
//           params: { resource: 'event' }
//         })
//       } else {
//         router.push({
//           name: 'network-error',
//         })
//       }


//     })
// })

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
  border: var(--base-green);
  opacity: 0.6;
  padding: 5px 10px;
  color: white;
  background-color: var(--base-green);

}

#nav {
  padding: 50px 0;
}
</style>