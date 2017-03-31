<template>
  <div id="app" class="container">
    <app-room v-for="room in rooms" :room-name="room.name" :starting-minutes="room.startingMinutes" :key="room.name"></app-room>
  </div>
</template>

<script>
  import Room from './components/Room.vue'
  export default {
    name: 'app',
    data () {
      return {
        rooms: [
          {
            name: 'Saving Lincoln',
            startingMinutes: 2
          },
          {
            name: '20000 Leaks',
            startingMinutes: 3
          },
          {
            name: 'Tomb of Doom',
            startingMinutes: 5
          }
        ],
        msg: 'Welcome to Your Vue.js App'
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
