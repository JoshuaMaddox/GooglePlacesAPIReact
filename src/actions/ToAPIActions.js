import API from '../API'

const ToAPIActions = {
  sendSearch(searchStr){
    API.sendSearch(searchStr) 
  },

  sendLatLng(locObj){
    API.sendLatLng(locObj)
  }
}
export default ToAPIActions