import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dltrail/real-word-vue-3',
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
