import React, {useState, useEffect} from 'react'
import '../todayWeather/todayWeatherStyles.css'
import Shower from '../../assets/weather-app-master/Shower.png'
import cloudBackground from '../../assets/weather-app-master/cloudBackground.png'

export default function TodayWeather() {

   const [weather, setWeather] = useState([])
  
  // const URL = 'http://api.weatherapi.com/v1';

  // const showData = async () => { 
  //   const response = await fetch(URL)
  //   const data = await response.json()
  //   setWeather(data)
  //   console.log(data)
  // } 

  useEffect(() => {
    setWeather(data)
  }, [])

  return (
    <div className='todayWeather-container'>
      <img className='clouds' src={cloudBackground}/>
      <div className='components'>
        <button className='button-search'>
          <p className='button-search-font'>Search for places</p>
          </button>
          <div className='placement-icon'>
          <span class="material-icons md-light location">my_location</span> 
          </div>
      </div>
      <div className='weather-icon'>
        <img  className='weather-icon'src={Shower}/></div>
      <div className='degres-font'>
        <h1 >{weather.degres}</h1>
        <h1 className='degre-c'>°C</h1>
        </div>
      <div className='weather-status'>
        <h2 className='weather-status-font'>Shower</h2></div>
      <div className='weather-highlights'>
        <h5 className='today-font'>Today</h5>
        <h5 className='circle-icon'>•</h5>
        <h5 className='date'>Fri, 5 jun</h5>
        
      </div>
      <div className='position'>
      
        <span class="material-icons md-light">
       location_on
        </span>
        <h5 className='city'>Helsinski</h5>
      </div>
    </div>
  )
}

const data = {
  degres: '15',
  weather: 'Shower',
  city: 'Helsinski'
}