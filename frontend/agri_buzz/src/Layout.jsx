import React from 'react'
import { Outlet } from 'react-router-dom'
import Mynav5 from './Components/Mynavbar'
import Myfooter from './Components/Myfooter'

const Layout = () => {
  return (
    <>
    <div>
        <Mynav5/>
        <Myfooter/>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout;