import { defineStore } from 'pinia'

export const useEventStore = defineStore('eventList', {
  //state
  state: () => ({
    eventList: [],
    id: 1001
  }),
  //getters
  actions: {
    addEvent(event) {
      this.toList.push({ event, id: this.id++, boosted: false })
    },
    deleteEvent(eventId) {
      this.toList = this.toList.filter((object) => {
        return object.id !== eventId
      })
    }
  }
})
