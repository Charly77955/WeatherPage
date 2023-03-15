import React, {useState, useEffect} from 'react'

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
    <div>
      <h1>tiempo: {weather.degres}</h1>
    </div>
  )
}

const data = {
  degres: 15,
  weather: 'Shower',
  city: 'Helsinski'
}