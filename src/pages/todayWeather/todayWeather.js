import React, {useState, useEffect} from 'react'
import '../todayWeather/todayWeatherStyles.css'
import Shower from '../../assets/weather-app-master/Shower.png'
import findMe from '../../assets/weather-app-master/findMe.png'
import location from '../../assets/weather-app-master/location.png'
import circle from '../../assets/weather-app-master/circle.png'


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
    <div className='container'>
      <img src=''/>
      <div className='components'>
        <button className='button-search'><p className='button-search-font'>Search for places</p></button>
        <div className='placement-icon'><img className='findMeIcon' src={findMe}/>
        </div>
      </div>
      <div className='weather-icon'>
        <img  className='weather-icon'src={Shower}/></div>
      <div className='degres'>
        <h1 className='degres-font'>{weather.degres}</h1></div>
      <div className='weather-status'>
        <h2 className='weather-status-font'>Shower</h2></div>
      <div className='weather-highlights'>
        <h5 className='today-font'>Today</h5>
        <img className='circle-icon' src={circle}/>
        <h5 className='date'>fri, 5 jun</h5>
        <h5 className='city'>Helsinski</h5>
        <img className='location-icon' src={location}/>
      </div>
    </div>
  )
}

const data = {
  degres: '15°c',
  weather: 'Shower',
  city: 'Helsinski'
}