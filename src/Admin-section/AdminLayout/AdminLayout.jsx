import React from 'react'
import ANavbar from '../ANavbar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="flex flex-col md:flex-row">
        <ANavbar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
