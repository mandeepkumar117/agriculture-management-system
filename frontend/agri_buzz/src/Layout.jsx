import React from 'react'
import { Outlet } from 'react-router-dom'
import Mynav5 from './Components/Mynavbar'

const Layout = () => {
  return (
    <>
    <div>
        <Mynav5/>
        
    </div>
    <Outlet/>
    </>
  )
}

export default Layout;