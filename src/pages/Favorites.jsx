import React from 'react'
import { favAgents, favMaps, favSprays, favWeapons } from '../data/dataFavorites'
import { arrayAgents, arrayMaps, arraySprays, arrayWeapons } from '../data/dataGlobal'
import PrintFavsAgents from '../components/PrintFavs/PrintFavsAgents'
import "./Favorites.css"
import PrintFavsMaps from '../components/PrintFavs/PrintFavsMaps'
import PrintFavsWeapons from '../components/PrintFavs/PrintFavsWeapons'
import PrintFavsSprays from '../components/PrintFavs/PrintFavsSprays'


const Favorites = () => {
  console.log("favoritessss", favAgents)

  return (
    <>
    <h2>AGENTS:</h2>
    <div className="divFavAgents">
      <PrintFavsAgents data={favAgents} array={arrayAgents}/>
    </div>
    <h2>MAPS:</h2>
    <div className="divFavMaps">
      <PrintFavsMaps data={favMaps}/>
    </div>
    <h2>WEAPONS:</h2>
    <div className="divFavWeapons">
      <PrintFavsWeapons data={favWeapons} array={arrayWeapons}/>
    </div>
    <h2>SPRAYS:</h2>
    <div className="divFavSprays">
      <PrintFavsSprays data={favSprays}/>
    </div>
    </>
  )
}

export default Favorites