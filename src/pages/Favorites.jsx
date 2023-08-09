import React from 'react'
import { favAgents } from '../data/dataFavorites'
import { arrayAgents } from '../data/dataGlobal'
import PrintFavsAgents from '../components/PrintFavs/PrintFavsAgents'
import "./Favorites.css"

const Favorites = () => {
  console.log("favoritessss", favAgents)

  return (
    <>
    <div className="divFavAgents">
      <PrintFavsAgents data={favAgents}/>
    </div>
    <div className="divFavMaps">
      
    </div>
    <div className="divFavWeapons">

    </div>
    <div className="divFavSprays">

    </div>
    </>
  )
}

export default Favorites