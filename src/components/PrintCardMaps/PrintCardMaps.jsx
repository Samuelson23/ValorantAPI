import React, { useEffect, useState } from 'react'
import "./PrintCardMaps.css"
import PrintBackMaps from './PrintBackMaps'
import BtnFav from '../BtnFav/BtnFav'
import { favMaps } from '../../data/dataFavorites'

const PrintCardMaps = ({data}) => {
  const [backMap, setBackMap] = useState(false)
  const [backImg, setBackImg] = useState("")

  const mapDetails = () => {
    /* const front = document.querySelector(".imgFrontMap")
    const back = document.querySelector(".imgBackMap")
    front.removeAttribute("class")
    front.setAttribute("class", "imgFrontMapClick")
    back.removeAttribute("class")
    back.setAttribute("class", "imgBackMapClick") */
  }
  console.log(data)

  useEffect(()=>{console.log(backMap)},[backMap])
  return (
    <div className="divAllMaps">
      {/* {(backMap==true) && <PrintBackMaps elem={backImg} setter={setBackMap}/>} */}
      {
        data.map((map)=>{
          return(
            <figure key={map.uuid} className="figureInfoMap" onClick={()=>mapDetails()} >
              <div className="divNameAndBtn">
                <h2>{map.displayName}</h2>
                {favMaps.includes(map.uuid)
                  ?
                  <BtnFav className={"btnInFav"} elem={map} idArray={"map"}/>
                  :
                  <BtnFav className={"btnAddFav"} elem={map} idArray={"map"}/>}
              </div>
              <div className="divImgRotate">
                <img src={map.splash} alt="img map" className="imgFrontMap"/>
                <img src={map.displayIcon} alt="img back map" className="imgBackMap" />
              </div>
            </figure>
            
          )
        })
        
      }
      
    </div>
  )
}

export default PrintCardMaps