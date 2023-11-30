import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

function Nav() {
    const {setQuery, query} = useFetch("https://api.openweathermap.org/data/2.5/weather", "ff2881abc2701f9e9b0bf2a7bb4bbca7") 
    const handleNavBtn = (title)=> {
        setQuery(title)
    }
    console.log(query);

    const navCities = [
        {
            id: 1,
            title: "Rasht"
        },
        {
            id: 2,
            title: "Tehran"
        },
        {
            id: 3,
            title: "Johor Bahru"
        },
        {
            id: 4,
            title: "New York"
        },
        {
            id: 5,
            title: "Ottawa"
        },
        {
            id: 6,
            title: "Sydney"
        },
    ]
    return (
            <ul className='flex flex-col gap-y-8 mt-6'>
                {
                    navCities.map(item => {
                        return(
                            <li key={item.id}>
                                <button onClick={()=>handleNavBtn(item.title)} className='font-bold border-b-2 border-slate-400 p-2'>
                                    {item.title}
                                </button>
                            </li>
                        )})
                }
            </ul>
        )
}

export default Nav