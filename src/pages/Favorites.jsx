import React from 'react'
import { favAgents } from '../data/dataFavorites'
import { arrayAgents } from '../data/dataGlobal'
import PrintFavsAgents from '../components/PrintFavs/PrintFavsAgents'
import "./Favorites.css"

const Favorites = () => {
  console.log("favoritessss", favAgents)

  return (
    <>
    <h2>AGENTS:</h2>
    <div className="divFavAgents">
      <PrintFavsAgents data={favAgents}/>
    </div>
    <h2>MAPS:</h2>
    <div className="divFavMaps">
      
    </div>
    <h2>WEAPONS:</h2>
    <div className="divFavWeapons">

    </div>
    <h2>SPRAYS:</h2>
    <div className="divFavSprays">

    </div>
    </>
  )
}

export default Favorites