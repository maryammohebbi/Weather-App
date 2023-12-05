import React from 'react'
import Loader from './Loader'
import moment from 'moment'

function HourlyForcast({hourlyWeather, hourlyIsLoading}) {

    // console.log(hourlyWeather);

    if(hourlyIsLoading) return <Loader/>
    
        return(
          <div className='flex flex-col gap-y-4'>
            <h2 className='font-bold '>Hourly Forcasting:</h2>
            <div className='flex flex-wrap justify-between gap-2'>
              {
                hourlyWeather?.list?.slice(6,12).map(item => {

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