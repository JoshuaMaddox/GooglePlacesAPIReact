import React, { Component } from 'react'
import MapStore from '../stores/MapStore'
import ToAPIActions from '../actions/ToAPIActions'
import { Link } from 'react-router'
import SearchResults from './SearchResults'
import StaticMap from './StaticMap'

export default class Layout extends Component {
  constructor() {
    super();

    this.searchPlaces = this.searchPlaces.bind(this)
  }

  searchPlaces(e){
    e.preventDefault()
    const { input } = this.refs
    let searchStr = input.value.split(' ').join('+')
    ToAPIActions.sendSearch(searchStr)
  }


  render() {
    return (
      <div className="row layOutContainer">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">MapApp</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Map <span className="sr-only">(current)</span></a></li>
              </ul>
              <form className="navbar-form navbar-left" onSubmit={this.searchPlaces}>
                <div className="form-group">
                  <input ref='input' type="text" className="form-control" id='inputForm' placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Search Maps</button>
              </form>
            </div>
          </div>
        </nav>
        <div className='text-center'>  
          <StaticMap />
        </div>
        <div className='text-center'>
          <SearchResults />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
  