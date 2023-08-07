import React, { useEffect, useState } from 'react'
import { getService } from '../service/service.config'

const PrintAgents = () => {
    const [dataService, setDataService] = useState([{}])
    const [dataAgents, setDataAgents] = useState([])


    const getData = async () => {
        setDataService(await getService("agents"))
        console.log(dataService)
    }



    useEffect(()=>{
        getData()
        console.log(dataService)
    },[])

    useEffect(()=>{
        dataService?.data?.map((elem)=>{
            
            setDataAgents(...dataAgents,{
                name:elem.displayName,
                description: elem.description,
                role: elem.role,
                abilities: elem.abilities,
                icon: elem.displayIcon,
                image: elem.fullPortrait,
                background: elem.background,
                backgroundColors: elem.backgroundGradientColors
            })
            console.log(elem.displayName)
        })
    },[dataService])

    console.log("data agents", dataAgents)

  return (
    <>
    <div>PrintAgents</div>
    <button onClick={()=> console.log("DATA",dataService)}></button>
    
    </>
  )
}

export default PrintAgents