const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Use environment variable port or 3000
const port = process.env.PORT || 3001;

const roomManagerCreator = require('./roomManager.js')

var roomManager = new roomManagerCreator.RoomManager()
        
setInterval( () => {roomManager.updateRooms()}, 1000)

// This is for development mostly
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

/* API ROUTES */
var router = express.Router();
app.use(bodyParser.json())

// Base route (easy connectivity test)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to the room manager' });   
});

// Room list
router.get('/rooms', function(req, res) {
    res.json(roomManager.rooms);
});

// // Send hint
// router.post('/hint', function(req, res) {
//     room.hint(req.body.hint);
//     res.json({success: true, hint: req.body.hint})
// });

// // Set Time
// router.post('/settime', function(req, res) {
//     room.secondsRemaining(req.body.secondsRemaining)
//     res.json({success: true, room: room.roomStatus})
// });

// // Pause
// router.get('/pause', function(req, res) {
//     room.pause();
//     res.json({
//         message: `paused with ${room.secondsRemaining} remaining`,
//         secondsRemaining: room.secondsRemaining,
//         playing: room.isPlaying
//     })
// });

// // Pause
// router.get('/play', function(req, res) {
//     room.play();
//     res.json({
//         message: `resumed with ${room.secondsRemaining} remaining`,
//         secondsRemaining: room.secondsRemaining,
//         playing: room.isPlaying
//     });
// });


/* START SERVER */
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/dist', express.static(__dirname + '/dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))