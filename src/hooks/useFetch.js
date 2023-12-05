import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function useFetch(apiUrl, apiKey, isHourly= false, city= "rasht") {
    const [weather, setWeather] = useState({})
    const [query, setQuery] = useState("rasht")
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData(){
            setIsLoading(true)
            try{
                const url = isHourly ? `${apiUrl}?q=${city}&appid=${apiKey}` : `${apiUrl}?q=${query}&appid=${apiKey}`;
                const { data } = await axios.get(url, { signal });
                // const {data} = await axios.get(`${apiUrl}?q=${query}&appid=${apiKey}`, {signal})            
                setWeather(data)
            }
            
            catch(err){
                if(!axios.isCancel(err)){
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
    },[query, apiUrl, apiKey, isHourly, city])

  return {weather, query, setQuery, isLoading}
}

export default useFetch