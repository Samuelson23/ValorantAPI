import React from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481491/icons8-linkedin-48_phhzaj.png"
        onClick={()=> navigate("https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/")}
      />
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481489/icons8-github-64_fbjunw.png"
        onClick={()=> navigate("https://github.com/Samuelson23/ValorantAPI")}
      />
    </footer>
  )
}

export default Footer