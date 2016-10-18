import axios, { get, put, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  sendSearch(searchStr){ 
    get(`/maps?search=${searchStr}`)
      .then(res => {
        let { data } = res
        // ServerActions.sendCityInfo()
        ServerActions.receiveSearchResults(data)
      })
      .catch(console.error)
  }

  // sendLatLng(locObj){
  //   get(`/maps/gettime?lat=${locObj.lat}&lng=${locObj.lng}`)
  //     .then(res => {
  //       let { data } = res
  //       console.log(" I am the res in API.js ", res)
  //       // ServerActions.receiveNewMap(data)
  //     })
  // }

}

export default API



