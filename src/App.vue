<template>
  <div id="app" class="container">
    <!-- <app-room v-if="rooms" v-for="(room, index) in rooms" :room="room" :key="index"></app-room> -->
    <app-room v-if="room != {}" :room="room"></app-room>
  </div>
</template>

<script>
  import axios from './axios-roommanager'
  import Room from './components/Room.vue'
  export default {
    name: 'app',
    created () {    
      setInterval(() => {
        axios.get(this.roomUrl)
          .then( response => {
            console.log(response)
            this.room = response.data;
          })
      }, 1000)
    },
    data () {
      return {
        roomUrl: '/room', // probably put this in a config file or something
        // No wait, this is going to be served by a backend that should keep track of all rooms that are up.
        // So, this should ping it's own backend to get a list of room addresses. 
        // Actually maybe the backend should ping the rooms itself and then this only needs to ping its backend.
        room: {}
      }
    },
    components: {
      appRoom: Room
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
