import React from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <a href="https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481491/icons8-linkedin-48_phhzaj.png"
      />
      </a>
      <p>Samuel Martinez ©</p>
      <a href="https://github.com/Samuelson23/ValorantAPI" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481489/icons8-github-64_fbjunw.png"
      />
      </a>
    </footer>
  )
}

export default Footer