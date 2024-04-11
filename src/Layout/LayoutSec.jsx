import React from 'react'
import BNavesec from '../Pages/BNavesec'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function LayoutSec() {
  return (
    <div className="flex flex-col px-2">
        <BNavesec />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default LayoutSec