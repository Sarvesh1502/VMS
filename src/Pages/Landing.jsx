import React from 'react'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <div>
    <NavLink to = '/stdlogin'>LOGIN AS STUDENT</NavLink>
    </div>
    <div>
    <NavLink to = '/adminlogin'>LOGIN AS ADMIN</NavLink>
    </div>
    </>
  )
}

export default Landing