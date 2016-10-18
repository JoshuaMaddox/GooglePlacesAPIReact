import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import ServerActions from '../actions/ServerActions'
import { Link, browserHistory } from 'react-router'
import MapStore from '../stores/MapStore'
import StaticMap from './StaticMap'

export default class SearchResults extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: MapStore.getSearchResults()
    }
    this._onChange = this._onChange.bind(this)
    this.addToMap = this.addToMap.bind(this)
  }

   componentWillMount() {
    MapStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    MapStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({ 
      searchResults: MapStore.getSearchResults()
    })
  }

  addToMap(e){
    let location = document.getElementById(e.target.id)
    let locObj = {
      lat: location.dataset.lat,
      lng: location.dataset.lng,
      id: e.target.id
    }
    ServerActions.sendNewMap(locObj)
    // ToAPIActions.sendLatLng(locObj)
  }

  render() {

    const { searchResults }  = this.state
    let resultsDisplay;
    if(searchResults){
      resultsDisplay = (
        searchResults.map((place, i, a) => {
          return (
            <div className="col-md-6 " key={place.id}>
              <div className="panel panel-default">
                <div className="panel-body searchResultsBox">
                 <h4>{place.name}</h4>
                 <p className="place_address">{place.formatted_address}</p>
                 <p>Rating: {place.rating}</p>
                 <img src={place.icon} alt="The icon of the place"/>
                 <button className="btn btn-primary btn-block addToMap" 
                  id={place.id}
                  data-lng={place.geometry.location.lat}
                  data-lat={place.geometry.location.lng} 
                  onClick={this.addToMap}>
                  Add Me To Map</button>
                </div>
              </div>
            </div>
          )
        })
      )
    } else {
      resultsDisplay = <div></div>
    }

    return (
      <div className="row is-flex text-center">
        {resultsDisplay}
      </div>
    )
  }
}
