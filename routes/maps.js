const express = require('express')
const mapRequests = require('../models/mapRequests')
const router = express.Router()


//Send Email With Translation
// router.get('/gettime', (req, res) => {
//   let markerWithId = req.query
//   mapRequests.getTimeZone(markerWithId, (err, newMap) => {
//     res.send(newMap)
//   })
// })

router.get('/', (req, res) => {
  let searchStr = req.query.search
  searchStr = searchStr.split(' ').join('+')
  mapRequests.sendSearch(searchStr, (err, mapRes) => {
    res.send(mapRes)
  })
})


// router.put('/new', (req, res) => {
//   let newBeer = req.query
//   mapRequests.saveBeer(newBeer, (err, curBeerList) => {
//     res.send(curBeerList)
//   })
// })

module.exports = router
