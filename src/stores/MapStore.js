import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import {  browserHistory } from 'react-router'

let _searchResults;
let _newMap = []

class MapStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'SEARCH_RESULTS_RECEIVED':
          _searchResults = action.payload.searchResults
          this.emit('CHANGE')
          break
        case 'MAP_RECEIVED':
          _newMap.push(action.payload.newMap)
          console.log('I am _newMap in the MapStore', _newMap) 
          this.emit('CHANGE')
          // browserHistory.push('/image/translation')
          break
      }
    })
  }
  
  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getSearchResults(){
    return _searchResults
  }

  getNewMap(){
    return _newMap
  }
}

export default new MapStore