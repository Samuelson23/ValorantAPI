import React from 'react'
import "./PrintFavsMaps.css"
import { useNavigate } from 'react-router-dom'


const PrintFavsMaps = ({data, array}) => {
    console.log("data favMaps", data)
    console.log("array maps", array)
    const allMaps = array.data
    const navigate=useNavigate()
    
  return (
    <>
    {
      allMaps?.map((elem)=>{
        if(data.includes(elem.uuid)){
          return(
            <figure key={elem.uuid} className="figureFavMap">
              <img src={elem.splash} alt={`map of ${elem.displayName}`} className="imgFavMap" />
              <h2>{elem.displayName}</h2>
              
            </figure>
          )
        }
      })
    }
    </>
  )
}

export default PrintFavsMaps