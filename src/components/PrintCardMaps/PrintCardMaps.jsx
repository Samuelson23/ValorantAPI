import React, { useEffect, useState } from 'react'
import "./PrintCardMaps.css"
import PrintBackMaps from './PrintBackMaps'
import BtnFav from '../BtnFav/BtnFav'
import { favMaps } from '../../data/dataFavorites'

const PrintCardMaps = ({data}) => {
  const [backMap, setBackMap] = useState(false)
  const [backImg, setBackImg] = useState("")

  const mapDetails = (name) => {
    /*
    Con esta funcion vamos a hacer un toggle a las clases de las imagenes para que roten al hacer click. Para ello nos traemos todas las imagenes
    y las recorremos para que cuando coincida el nombre del mapa nos haga el efecto de rotar y muestre la segunda imagen
    */
    const imgFront = document.querySelectorAll(".imgFrontMap")
    const imgBack = document.querySelectorAll(".imgBackMap")

    imgFront.forEach((elem)=>{
      elem.alt.includes(name) && elem.classList.toggle("imgFrontMapAfter")
      
    })
    imgBack.forEach((elem)=>{
      elem.alt.includes(name) && elem.classList.toggle("imgBackMapAfter")
    })
  }
  console.log(data)

  useEffect(()=>{console.log(backMap)},[backMap])
  return (
    <div className="divAllMaps">
      {
        data.map((map)=>{
          return(
            <figure key={map.uuid} className="figureInfoMap" >
              <div className="divNameAndBtn">
                <h2>{map.displayName}</h2>
                {favMaps.includes(map.uuid)
                  ?
                  <BtnFav className={"btnInFav"} elem={map} idArray={"map"}/>
                  :
                  <BtnFav className={"btnAddFav"} elem={map} idArray={"map"}/>}
              </div>
              <div className="divImgRotate" onClick={()=>mapDetails(map.displayName)} >
                <img src={map.splash} alt={`alt img ${map.displayName}`} className="imgFrontMap"/>
                <img src={map.displayIcon} alt={`alt img ${map.displayName}`} className="imgBackMap" />
              </div>
            </figure>
            
          )
        })
        
      }
      
    </div>
  )
}

export default PrintCardMaps