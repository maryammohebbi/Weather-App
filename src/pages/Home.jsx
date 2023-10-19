import React from 'react'

function Home() {
  return ( 
    <section className="w-full rounded-lg p-5">        
        <Form/>
        <Weather/>

    </section>
  )
}

export default Home


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

function Weather(){
  return (
        <div className='flex flex-col items-center gap-y-4 border-b-2 border-slate-400 py-4'>
            <h1 className='font-bold text-lg lg:text-2xl text-blue-950'>Rasht</h1>
            <h2 className='font-bold text-lg lg:text-2xl text-blue-900'>Sunny</h2>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col w-full'>
                <span className='text-xs lg:text-sm flex flex-col gap-2 md:flex-row text-blue-950'>How you feel: <span className='font-bold'> 25C</span> </span>
                <span className='text-xs lg:text-sm flex flex-col gap-2 md:flex-row text-blue-950'>Humidity: <span className='font-bold'> 75%</span> </span>
              </div>
              <h2 className='text-lg md:text-2xl lg:text-3xl font-bold w-full text-center'>25 C</h2>
              <div className='w-full text-center'>photo</div>
            </div>
            <div>
              <span>Thursday - 10 Oct </span>
               | 
              <span> Time: 5:06 PM</span>
            </div>
            <div className='flex justify-between w-full'>
              <div className='rounded-xl bg-purple-300 p-2 bg-opacity-60'>High: 26</div>
              <div className='rounded-xl bg-purple-300 p-2 bg-opacity-60'>Low: 20</div>
              <div className='rounded-xl bg-purple-300 p-2 bg-opacity-60'>Sunrise: 6:00 AM</div>
              <div className='rounded-xl bg-purple-300 p-2 bg-opacity-60'>Sunset: 6:00 PM</div>
            </div>
        </div>
  )
}