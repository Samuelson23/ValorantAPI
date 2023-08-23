import React, { useEffect, useState } from 'react'
import "./PrintCardAgent.css"
import PrintInfoAgent from '../PrintInfoAgent/PrintInfoAgent'
import { useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import { favAgents } from '../../data/dataFavorites'
import BtnFav from '../BtnFav/BtnFav'

const PrintCardAgent = ({data}) => {
    const navigate = useNavigate()
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
                            {
                                elem.displayName!="KAY/O"
                                ? <button className="btnInfoAgent" onClick={()=> navigate(`/agents/${elem.displayName}`)}>More Info</button>
                                : <button className="btnInfoAgent" onClick={()=> navigate(`/agents/KAY-O`)}>More Info</button>
                            }
                            {favAgents.includes(elem.uuid)
                            ?
                            <BtnFav className={"btnInFav"} elem={elem} idArray={"agent"}/>
                            :
                            <BtnFav className={"btnAddFav"} elem={elem} idArray={"agent"}/>}
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