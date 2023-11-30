import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'



function useWeather() {
    const apiKey = "ff2881abc2701f9e9b0bf2a7bb4bbca7"
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
    const [weather, setWeather] = useState({})
    const [query, setQuery] = useState("rasht")
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData(){
            setIsLoading(true)
            try{
                const {data} = await axios.get(`${apiUrl}?q=${query}&appid=${apiKey}`, {signal})            
                setWeather(data)
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

  return {weather, query, setQuery, isLoading}
}

export default useWeather