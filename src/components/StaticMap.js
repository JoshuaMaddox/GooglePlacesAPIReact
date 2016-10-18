import React, { Component } from 'react'
import MapStore from '../stores/MapStore'

export default class StaticMap extends Component {
  constructor() {
    super();
    this.state = {
      markersMap: MapStore.getNewMap()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    MapStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    MapStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({ 
      markersMap: MapStore.getNewMap()
    })
  }


  render() {
    const { markersMap } = this.state
    let urlPart = ''
    let colorsArr = ['black', 'brown', 'green', 'purple', 'yellow', 'blue', 'orange', 'red']

    if(markersMap){
      markersMap.forEach((obj, i, a) => {
       urlPart += `&markers=color:${colorsArr[Math.floor(Math.random()*colorsArr.length)]}|label:'Cafe Cluny'|${obj.lng},${obj.lat}`
      })  
    }

    return (
      <div>
        {markersMap ? <img src={encodeURI(`http://maps.google.com/maps/api/staticmap?size=900x300&maptype=roadmap${urlPart}&sensor=false`)}/> : <div></div>}
      </div>
    )
  }
}
