import axios from 'axios'
import React, { useEffect, useState } from 'react'


function useWeather(apiKey, apiUrl) {
    const [weather, setWeather] = useState(null)
    const [query, setQuery] = useState("Rasht")

    useEffect(()=>{
        async function fetchData(){
            try{
                const {data} = await axios.get(`${apiUrl}weather?q=${query}&appid=${apiKey}`)
            }
            catch{
                
            }
            finally{

            }
        }
    },[query])

  return (
    <></>
  )
}

export default useWeather