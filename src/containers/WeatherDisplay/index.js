import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../../components/Chart'
import Map from '../../components/Map'
import './styles.css'

class WeatherDisplay extends Component {

  renderWeather(cityData) {
    const { list, city: { name, coord: { lat, lon } } } = cityData
    const formatFahrenheit = tempKelvin => Math.round((tempKelvin * (9/5) - 459.67)*100)/100

    const temp = list.map( weather => formatFahrenheit(weather.main.temp) )
    
    const humidity = list.map( weather => weather.main.humidity )
    
    const pressure = list.map( weather => weather.main.pressure )

    return (
      <tr key={ name }>
        <td><Map className='city' lat={ lat } lon={ lon }/></td>
        <td><Chart data={ temp } units='°F' color='red'/></td>
        <td><Chart data={ pressure } units='hPa' color='green'/></td>
        <td><Chart data={ humidity } units='%' color='blue'/></td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps)(WeatherDisplay)