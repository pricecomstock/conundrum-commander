// puzzle sets
const roomList = require('./RoomList.js').roomList
const axios = require('axios')

function getRoomStatus(roomIndex) {
    return axios.get('/api/room')
}

class RoomManager {
    constructor() {
        console.log(roomList)
        this._rooms = roomList.map( roomConfig => {
            roomConfig.roomStatus = {online: false}
            return roomConfig
        })

        this.updateRooms()
    }

    updateRoom (room) {
        axios.get(room.url + '/room')
        .then ( response => {
            console.log(response.data)
            room.roomStatus = response.data
        }) 
        // timeout means a room is offline
        .catch( error => {
            if (error.code == 'ECONNABORTED' || error.code == 'ECONNREFUSED') {
                room.roomStatus.online = false
            }
        })
    }

    updateRooms () {
        this._rooms.forEach( room => {
            this.updateRoom(room)
        } )
        console.log(this._rooms)
    }

    get rooms () {
        return this._rooms
    }
  }

module.exports.RoomManager = RoomManager;