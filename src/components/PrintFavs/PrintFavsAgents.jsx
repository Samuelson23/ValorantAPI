import React from 'react'
import { arrayAgents } from '../../data/dataGlobal'
import "./PrintFavsAgents.css"
import { useNavigate } from 'react-router-dom'

const PrintFavsAgents = ({data, array}) => {
    const navigate = useNavigate()
    const allAgents = array.data
    console.log(data)
  return (
    <>
        {
        allAgents.map((elem)=>{
            if(data.includes(elem.uuid)){
                return(
                    <figure key={elem.uuid} className="figureFavAgent">
                        <img src={elem.fullPortrait} alt={`image of ${elem.displayName}`} />
                        <h2>{elem.displayName}</h2>
                        <button onClick={()=> navigate(`/agents/${elem.displayName}`)} className="btnFavsCards">SHOW INFO</button>
                    </figure>
                    
                    
                )
            }
        })
        }
    </>
  )
}

export default PrintFavsAgents