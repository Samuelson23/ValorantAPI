import React from 'react'
import { arrayAgents } from '../../data/dataGlobal'
import "./PrintFavsAgents.css"
import { useNavigate } from 'react-router-dom'

const PrintFavsAgents = ({data}) => {
    const navigate = useNavigate()
    const allAgents = arrayAgents.data
    console.log(data)
  return (
    <div>
        {
        allAgents.map((elem)=>{
            if(data.includes(elem.uuid)){
                return(
                    <h2>{elem.displayName}</h2>
                    
                    
                )
            }
        })
        }
    </div>
  )
}

export default PrintFavsAgents