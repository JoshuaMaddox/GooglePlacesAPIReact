import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearchResults(searchResults){
    AppDispatcher.dispatch({
      type: 'SEARCH_RESULTS_RECEIVED',
      payload: { searchResults }
    }) 
  },

  sendNewMap(newMap){
     AppDispatcher.dispatch({
      type: 'MAP_RECEIVED',
      payload: { newMap }
    })
  }

}
export default ServerActions


