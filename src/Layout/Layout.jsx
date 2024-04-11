import React from 'react'
import BNavbar from '../Pages/BNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function Layout() {
  return (
    <div className="flex flex-col px-2">
        <BNavbar/>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout
