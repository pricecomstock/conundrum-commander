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
            roomConfig.status = {online: false}
            return roomConfig
        })

        this.updateRooms()
    }

    async updateRoom (room) {
        console.log(room)
        try {
            const response = await axios.get(room.url + '/room')
            room.status = response.data
        } 
        // timeout means a room is offline
        catch(error) {
            if (error.code == 'ECONNABORTED') {
                room.status.online = false
            }
        }
    }

    updateRooms () {
        this._rooms.forEach( room => {
            this.updateRoom(room)
        } )
        this.printRooms()
    }

    printRooms() {
        console.log(this._rooms)
    }
  }

module.exports.RoomManager = RoomManager;