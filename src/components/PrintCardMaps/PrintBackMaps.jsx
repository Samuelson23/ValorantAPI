import React from 'react'

const PrintBackMaps = ({elem, setter}) => {
    console.log("backkkk", elem)
  return (
    <div className="divBackMap" onClick={()=>setter(false)}>
        <figure>
            <img src={elem} alt="back map image" />
        </figure>
    </div>
  )
}

export default PrintBackMaps