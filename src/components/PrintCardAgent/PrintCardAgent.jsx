import React, { useEffect, useState } from 'react'
import "./PrintCardAgent.css"
import PrintInfoAgent from '../PrintInfoAgent/PrintInfoAgent'
import { useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import { favAgents } from '../../data/dataFavorites'
import BtnFav from '../BtnFav/BtnFav'

const PrintCardAgent = ({data}) => {
    const navigate = useNavigate()
    console.log("DATA-AGENTS", data)
    console.log("favorites", favAgents)
    const [fav, setFav]=useState()

    

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
                            {favAgents.includes(elem.uuid)
                            ?
                            <BtnFav className={"btnInFav"} elem={elem}/>
                            :
                            <BtnFav className={"btnAddFav"} elem={elem}/>}
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