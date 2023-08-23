import React from 'react'
import BtnFav from '../BtnFav/BtnFav'
import { favSprays } from '../../data/dataFavorites'

const PrintSprays = ({data}) => {

  return (
    <>
    {
        data?.map((elem)=>{
            if(elem!=undefined){
                return(
                    <figure key={elem.uuid} className="figureSpray">
                        <h4>{elem.displayName}</h4>
                        <img src={elem.fullIcon} alt={elem.displayName} className="imgSpray"/>
                        {favSprays.includes(elem.uuid)
                            ?
                            <BtnFav className={"btnInFav"} elem={elem} idArray={"spray"}/>
                            :
                            <BtnFav className={"btnAddFav"} elem={elem} idArray={"spray"}/>}
                    </figure>
                )
            }
        })
    }
    </>
  )
}

export default PrintSprays