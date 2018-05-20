<template>
  <div id="app" class="container">
    <room v-if="rooms" v-for="(room, index) in rooms" :room="room" :key="index"></room>
  </div>
</template>

<script>
  import axios from './axios-roommanager'
  import room from './components/Room.vue'
  export default {
    name: 'app',
    created () {    
      setInterval(() => {
        axios.get(this.backendUrl)
          .then( response => {
            console.log('response', response)
            this.rooms = response.data;
          })
      }, 1000)
    },
    data () {
      return {
        backendUrl: '/rooms', // probably put this in a config file or something
        // No wait, this is going to be served by a backend that should keep track of all rooms that are up.
        // The backend should ping the rooms itself and then this only needs to ping its backend.
        rooms: []
      }
    },
    components: {
      room: room
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
