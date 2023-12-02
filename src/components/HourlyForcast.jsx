import React from 'react'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'
import moment from 'moment'

const apiHourlyUrl = import.meta.env.VITE_API_URL_HOURLY
const apiKey = import.meta.env.VITE_API_KEY

function HourlyForcast() {

    const {weather, isLoading} = useFetch(apiHourlyUrl, apiKey)
    // console.log(weather);

    if(isLoading) return <Loader/>
    
        return(
          <div className='flex flex-col gap-y-4'>
            <h2 className='font-bold '>Hourly Forcasting:</h2>
            <div className='flex flex-wrap justify-between gap-2'>
              {
                weather?.list?.slice(6,12).map(item => {

                  const forcastingHour = item.dt
                  const formatForcatingHour = moment.unix(forcastingHour).format('hh:mm A')

                  return(
                    <div key={item.dt} className='flex flex-col items-center border-2 border-slate-400 rounded-lg p-2'>
                      <span>{formatForcatingHour}</span>
                      <img
                      className='w-[60%]'
                       src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                      <span>{item.main.temp.toFixed().slice(0,2)} C</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }

export default HourlyForcast