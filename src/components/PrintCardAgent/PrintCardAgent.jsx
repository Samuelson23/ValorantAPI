import React, { useEffect, useState } from 'react'
import "./PrintCardAgent.css"
import PrintInfoAgent from '../PrintInfoAgent/PrintInfoAgent'
import { useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import { favAgents } from '../../data/dataFavorites'

const PrintCardAgent = ({data}) => {
    const navigate = useNavigate()
    console.log("DATA-AGENTS", data)
    console.log("favorites", favAgents)
    const [fav, setFav]=useState()

    const addToFavorite = (agent) => {
        const btn = document.getElementById(`${agent.uuid}`)
        btn.classList.toggle("btnInFav")
        console.log(btn)
        if(!favAgents.includes(agent.uuid)){
            favAgents.push(agent.uuid)
        }else{
            for(let x=0;x<favAgents.length;x++){
                if(favAgents[x]==agent.uuid){
                    favAgents.splice(x,1)
                }
            }
        }
        console.log("favsss", favAgents)
    }

    useEffect(()=>{
    
    },[fav])

  return (
    <div className="divCardsAgents">
        {
        data?.map((elem)=>{
            return (
                <section key={elem.uuid}>
                    <figure className="figureAgent">
                        <h2 className="h2NameAgent">{elem.displayName}</h2>
                        <img src={elem.displayIcon} className="imgAgentFull"/>
                        <div className="divButtonCards">
                            <button className="btnInfoAgent" onClick={()=> navigate(`/agents/${elem.displayName}`)}>More Info</button>
                            <button className="btnAddFav" id={elem.uuid} onClick={()=>addToFavorite(elem)}>
                                <img 
                                src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691485264/star_FILL0_wght400_GRAD0_opsz48_vtyy16.svg" 
                                alt="logoFavorite" 
                                
                                />
                            </button>
                        </div>
                        
                    </figure>
                </section>
            )
        })
        }
    </div>
  )
}

export default PrintCardAgent