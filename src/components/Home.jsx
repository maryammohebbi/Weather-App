import React, { useState } from 'react'
import {MagnifyingGlassCircleIcon} from "@heroicons/react/24/solid"
import Loader from './Loader'
import moment from 'moment'
import HourlyForcast from './HourlyForcast'

function Home({setQuery, isLoading, weather, hourlyWeather, hourlyIsLoading}) {
  return ( 
    <section className="w-full rounded-lg p-5">   

        <Form setQuery={setQuery}/>
        {
          isLoading ? <Loader/> : 
            <>
              <Weather weather={weather} />
              <HourlyForcast hourlyWeather={hourlyWeather} hourlyIsLoading={hourlyIsLoading}/>
            </>         
        }
    </section>
  )
}
export default Home

function Form({setQuery}){
  const [city, setCity] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setQuery(city)
    if(city === ""){
      setQuery("rasht")
    }
    setCity("")
  }
    return(
        <form 
        onSubmit={handleSubmit}
        action="submit" className='w-full flex items-center justify-between h-12'>
            <input
            value={city}
            onChange={e=> setCity(e.target.value)}
             type="text" placeholder="Type a city name here..."
            className='flex-1 p-3 bg-blue-50 text-blue-800 rounded-lg shadow-lg h-full'
            />
            <button> <MagnifyingGlassCircleIcon className='w-14 h-full text-blue-800'/> </button>
        </form>
    )
}

function Weather({weather}){
  const sunriseTime = weather?.sys?.sunrise;
  const sunsetTime = weather?.sys?.sunset;
  const timeZone = weather?.timezone
  const currentDate = new Date(Date.now() + timeZone * 1000);
  const date = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const formattedSunriseTime = moment.unix(sunriseTime).format('hh:mm A')
  const formattedSunsetTime = moment.unix(sunsetTime).format('hh:mm A')
  const formatTimeZone = moment.unix(timeZone).format('hh:mm A')

  return (
        <div className='flex flex-col items-center gap-y-4 border-b-2 border-slate-400 py-4'>
            <h1 className='font-bold text-lg lg:text-2xl text-blue-950'>{weather?.name} - {weather?.sys?.country}</h1>
            <h2 className='font-bold text-lg lg:text-2xl text-blue-900'>
              {weather && weather.weather && weather.weather[0] && weather.weather[0].description}
            </h2>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col w-full justify-center'>
                <span className='text-xs lg:text-sm flex flex-col gap-2 md:flex-row text-blue-950'>How you feel: <span className='font-bold'> {weather?.main?.feels_like.toFixed().slice(0,2)} °C</span> </span>
                <span className='text-xs lg:text-sm flex flex-col gap-2 md:flex-row text-blue-950'>Humidity: <span className='font-bold'> {weather?.main?.humidity}%</span> </span>
              </div>
              <h2 className='text-lg md:text-2xl lg:text-3xl font-bold w-full text-center'>{weather?.main?.temp.toFixed().slice(0,2)} °C</h2>
              <div className='w-full flex justify-center'>
                <img 
                className='w-[60%] '
                src={`https://openweathermap.org/img/w/${weather && weather.weather && weather.weather[0] && weather.weather[0].icon}.png`} />
              </div>
            </div>
            <div>
              <span>{date} </span>
               | 
              <span> Time: {formatTimeZone} </span>
            </div>
            <div className='flex flex-wrap justify-between w-full gap-2'>
              <div className='rounded-xl bg-purple-300 h-9 p-2 text-sm lg:text-base text-center bg-opacity-60'>High: {weather?.main?.temp_max.toFixed().slice(0,2)} °C</div>
              <div className='rounded-xl bg-purple-300 h-9 p-2 text-sm lg:text-base text-center bg-opacity-60'>Low: {weather?.main?.temp_min.toFixed().slice(0,2)} °C</div>
              <div className='rounded-xl bg-purple-300 h-9 p-2 text-sm lg:text-base text-center bg-opacity-60'>Sunrise: {formattedSunriseTime}</div>
              <div className='rounded-xl bg-purple-300 h-9 p-2 text-sm lg:text-base text-center bg-opacity-60'>Sunset: {formattedSunsetTime}</div>
            </div>
        </div>
  )
}

