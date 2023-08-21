import React from 'react'

const PrintFavsWeapons = ({data, array}) => {
    const arraySkins = []
    const allWeapons = array.data
    console.log("data",data)
    //console.log(allWeapons)
    allWeapons.map((elem)=>{
        elem.skins.forEach((skin)=>{
            arraySkins.push(skin.uuid)
        })
    })
    //console.log("array", arraySkins)
  return (
    <>
        {allWeapons.map((elem)=>{
            elem.skins.forEach((skin)=>{
                if(data.includes(skin.uuid)){
                    console.log("skinnnn",skin.displayName)
                    return(
                        <figure>
                            <h2>{skin.displayName}</h2>
                        </figure>
                    )
                }
            })
        })}
    </>
  )
}

export default PrintFavsWeapons