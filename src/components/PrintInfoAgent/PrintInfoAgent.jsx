import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { arrayAgents } from '../../data/dataGlobal'
import "./PrintInfoAgent.css"

const PrintInfoAgent = (dataAgent) => {
    const navigate=useNavigate()
/*
Mediante useParams recogemos el name del parametro de la ruta. Desde el array de todos los agentes flitramos ese nombre para traernos el objecto
del agente que necesitamos pintar en esta pagina
*/
    const {name} = useParams()
    const allAgents = arrayAgents.data
    const thisAgent = allAgents.filter((agent)=> name!="KAY-O" ? agent.displayName == name : agent.displayName == "KAY/O")

    console.log(thisAgent)

  return (
    <>
    <div className="divBackArrow">
        <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1692727727/pngwing.com_3_as5jo8.png" 
        alt="image back arro" 
        className="imgBackArrow" 
        onClick={()=> navigate("/agents")}
        />
    </div>
    <div className="divAllInfoAgent">
        <img 
        src={thisAgent[0].fullPortrait} 
        alt="img agent"
        className="imgFullAgent"
            
        />
        <section className="sectionTitleAgent">
            <h2 className="h2InfoName">{thisAgent[0].displayName.toUpperCase()}</h2>
            <div className="divRolBio">
            <h3># ROL</h3>
            <h2>{thisAgent[0].role.displayName.toUpperCase()}</h2>
            <h3># BIOGRAPHY</h3>
            <p>{thisAgent[0].description}</p>
            </div>
        </section>
        <section className="sectionAbilities">
        <h3># ABILITIES</h3>
            {
                thisAgent[0].abilities.map((ab)=>{
                    return(
                        
                        <div className="divAbilities">
                            <div>
                            <img src={ab.displayIcon} alt="abilitie icon"/>
                            <h3>{ab.displayName}</h3>
                            </div>
                        
                            <p>{ab.description}</p>
                        </div>
                    )
                })
            }
        </section>
        
    </div>
    </>
  )
}

export default PrintInfoAgent