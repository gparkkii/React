import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SearchPlace from './components/SearchPlaces';
import CustomerView from './components/CustomerView'

class App extends Component {
  render() {
    return (
      <>
        <SearchPlace></SearchPlace>
        <Map></Map>
        <CustomerView></CustomerView>
      </>
    )
  }
}

export default App;
