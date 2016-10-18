import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/Layout';
import SearchResults from './components/SearchResults'
import StaticMap from './components/StaticMap'


render(
  <div className="container text-center">
    <Router history = {browserHistory}>
      <Route path = '/' component = {Layout}/>
      <Route path = '/maps' component = {SearchResults}/>
      <Route path = '/maps/static' component = {StaticMap}/>
    </Router>
  </div>,
  document.getElementById('root')  
)

