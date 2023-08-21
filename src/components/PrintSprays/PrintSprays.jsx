import React from 'react'

const PrintSprays = ({data}) => {
    console.log("pintar", data)
  return (
    <>
    {
        data?.map((elem)=>{
            if(elem!=undefined){
                return(
                    <figure key={elem.uuid} className="figureSpray">
                        <h2>{elem.displayName}</h2>
                        <img src={elem.fullIcon} alt={elem.displayName} className="imgSpray"/>
                    </figure>
                )
            }
        })
    }
    </>
  )
}

export default PrintSprays