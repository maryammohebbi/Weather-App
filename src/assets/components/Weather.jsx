import React from 'react'

function Weather() {
  return ( 
    <section className="bg-slate-400 bg-opacity-40 w-full h-40 rounded-lg p-5 shadow-xl">        
        <Form/>
        <div>
            {/* <h1>City name</h1>
            <h2>20 C</h2>
            <h2>description</h2> */}
            
        </div>

    </section>
  )
}

export default Weather


function Form(){
    return(
        <form action="submit" className='w-full p-5 flex items-center justify-between gap-x-2'>
            <input type="text" placeholder="Type a city name here..."
            className='flex-1 p-3 bg-blue-50 text-blue-800 rounded-lg shadow-lg'
            />
            <button className='text-xs font-bold bg-blue-400 text-blue-950 p-4 sm:p-4 rounded-lg shadow-lg'>Search</button>
        </form>
    )
}