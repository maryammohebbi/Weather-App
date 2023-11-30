import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'



function useHourlyWeather() {
    const apiKey = "ff2881abc2701f9e9b0bf2a7bb4bbca7"
    const apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly"
    const [weatherHourly, setWeatherHourly] = useState({})
    const [query, setQuery] = useState("rasht")
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData(){
            setIsLoading(true)
            try{
                const {data} = await axios.get(`${apiUrl}?q=${query}&appid=${apiKey}`, {signal})            
                setWeatherHourly(data)
            }
            
            catch(err){
                if(!axios.isCancel()){
                    toast.error(err.message)
                }
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()
        return()=>{
            controller.abort()
        }
    },[query])

  return {weatherHourly, query, setQuery, isLoading}
}

export default useHourlyWeather