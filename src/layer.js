import React from 'react'
import { Outlet } from 'react-router-dom';
import HeadBar from './Components/HeadBar/HeadBar';



function Layer() {
  return (
    <>

    <HeadBar/>
   
    
    <Outlet />

    </>
  )
}

export default Layer