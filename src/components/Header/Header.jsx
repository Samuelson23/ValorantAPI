import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import "./Header.css"
const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div className="logoHome" onClick={()=> navigate("/")}>
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691480149/Valorant/logo_valorant_wallpaper_vanhcw.jpg"
        
      />
      </div>
      <div className="divNavHeader">
        <NavLink to="/agents">AGENTS</NavLink>
        <NavLink to="/maps">MAPS</NavLink>
        <NavLink to="/weapons">WEAPONS</NavLink>
        <NavLink to="/sprays">SPRAYS</NavLink>
      </div>
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691480710/favorite_FILL0_wght400_GRAD0_opsz48_zweimp.svg" 
        className="logoFavorites"
        onClick={()=> navigate("/favorites")}
      />
    </header>
  )
}

export default Header