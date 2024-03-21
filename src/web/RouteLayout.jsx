import React from 'react'
import Navbar from '../componets/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
    <div>
      {/* <Navbar/> */}
    </div>
    <div className='py-3 px-5'>
      <Outlet/>
    </div>
    </>
  )
}

export default RouteLayout