import React from 'react'
import "./PrintCardMaps.css"
const PrintCardMaps = ({data}) => {
  console.log(data)
  return (
    <div className="divAllMaps">
      {
        data.map((map)=>{
          return(
            <figure key={map.uuid} className="figureInfoMap">
              <h2>{map.displayName}</h2>
              <img src={map.splash} alt="img map" />
            </figure>
          )
        })
      }
    </div>
  )
}

export default PrintCardMaps