import React from 'react'
import "./PrintFavsWeapons.css"

const PrintFavsWeapons = ({data, array}) => {
    const arraySkins = []
    const allWeapons = array.data
    console.log("data",data)
    //console.log(allWeapons)
    allWeapons.map((elem)=>{
        elem.skins.forEach((skin)=>{
            if(data.includes(skin.uuid)){
                arraySkins.push(skin)
            }
        })
    })
    console.log("array", arraySkins)
  return (
    <>
        {
            arraySkins.map((elem)=>{
                return(
                    <figure key={elem.uuid} className="figureFavSkins">
                        <img src={elem.displayIcon} alt={`name of ${elem.displayName}`} className=""/>
                        <h3>{elem.displayName}</h3>
                    </figure>
                )
            })
        }
    </>
  )
}

export default PrintFavsWeapons