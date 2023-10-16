import React from 'react'
import Weather from './Weather'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-4xl p-5 container mx-auto flex flex-col items-center">
      <Weather/>
      <Outlet/>
    </div>
  )
}

export default Layout