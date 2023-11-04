import React from 'react'
import Sidebar from '../../../components/Sidebar'

const Layout = () => {
  return (
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='bg-bg-color flex-1 p-4 text-white border-1 border-dashed'>
        </div>
    </div>
  )
}

export default Layout