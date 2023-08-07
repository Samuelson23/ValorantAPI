import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import "./Header.css"
const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div className="logoHome" onClick={()=> navigate("/")}>
      <img 
        src=""
        
      />
      </div>
      <NavLink to="/agents">AGENTS</NavLink>
      <NavLink to="/maps">MAPS</NavLink>
      <NavLink to="/weapons">WEAPONS</NavLink>
      <NavLink to="/sprays">SPRAYS</NavLink>
    </header>
  )
}

export default Header