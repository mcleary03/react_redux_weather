import React, { Component } from 'react'
import './App.css'
import SearchBar from './containers/SearchBar'
import WeatherDisplay from './containers/WeatherDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar>Get 5 Day Weather by City</SearchBar>
        <WeatherDisplay />
      </div>
    )
  }
}

export default App
