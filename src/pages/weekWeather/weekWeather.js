import React, {useState, useEffect} from 'react'
import Card from './components/Card.js'
import './weekWeatherStyles.css'


function WeekWeather() {
    const [weekWeather, setWeekWeather] = useState([])

    useEffect(() => {
        setWeekWeather(data)
      }, [])

    return ( 
        <div className='week-container'>
            <div className='cards-container'>
                {weekWeather.map(day => <Card info={day}/>)}
            </div>
        </div>
    );
}

export default WeekWeather;

const data = [
    {
        id: 1,
        day: 'Tomorrow',
        weather: 'Shower',
        max: 16,
        min: 11
    },
    {
        id: 2,
        day: '17/03/2023',
        weather: 'Clear',
        max: 16,
        min: 11
    },
    {
        id: 3,
        day: '18/03/2023',
        weather: 'Sleet',
        max: 16,
        min: 11
    },
    {
        id: 4,
        day: '19/03/2023',
        weather: 'Snow',
        max: 16,
        min: 11
    },
    {
        id: 5,
        day: '20/03/2023',   
        weather: 'LightCloud',
        max: 16,
        min: 11
    }
]