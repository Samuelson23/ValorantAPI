import React from 'react'

const PrintFavsWeapons = ({data, array}) => {
    const arraySkins = []
    const allWeapons = array.data
    console.log(allWeapons)
    allWeapons.map((elem)=>{
        elem.skins.forEach((skin)=>{
            arraySkins.push(skin.uuid)
        })
    })
    console.log("array", arraySkins)
  return (
    <>
        {allWeapons.map((elem)=>{
            elem.skins.forEach((skin)=>{
                if(arraySkins.includes(skin)){
                    console.log("SKIN",skin)
                }
            })
        })}
    </>
  )
}

export default PrintFavsWeapons