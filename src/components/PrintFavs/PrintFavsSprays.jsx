import React from 'react'
import "./PrintFavsSprays.css"
const PrintFavsSprays = ({data, array}) => {
  const allSprays = array.data
  console.log(array)

  return (
    <>
    {
      allSprays.map((elem)=>{
        if(data.includes(elem.uuid)){
          return(
            <figure key={elem.uuid} className="figureFavSpray">
              <h3>{elem.displayName}</h3>
              <img src={elem.fullIcon} alt={`spray ${elem.displayName}`} className="imgFavSpray"/>
              
            </figure>
          )
        }
      })
    }
    </>
  )
}

export default PrintFavsSprays