import axios from 'axios'

// openweather.org api key
const API_KEY = '87b346f0630aa62690df7e45c57d1b86'
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = city => {
  const url = `${BASE_URL}${city},us&appid=${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}