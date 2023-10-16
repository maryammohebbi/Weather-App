import React from 'react'

function Home() {
  return ( 
    <section className="w-full rounded-lg p-5">        
        <Form/>
        <div>
            
        </div>

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