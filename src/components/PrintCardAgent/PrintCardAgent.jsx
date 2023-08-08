import React from 'react'
import "./PrintCardAgent.css"
import PrintInfoAgent from '../PrintInfoAgent/PrintInfoAgent'
import { useNavigate} from 'react-router-dom'


const PrintCardAgent = ({data}) => {
    const navigate = useNavigate()
    console.log("DATA-AGENTS", data)
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
                            <button onClick={()=> navigate(`/agents/${elem.displayName}`)}>More Info</button>
                            
                                <img 
                                    src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691485264/star_FILL0_wght400_GRAD0_opsz48_vtyy16.svg" 
                                    alt="logoFavorite" />
                            
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