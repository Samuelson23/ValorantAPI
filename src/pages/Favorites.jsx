import React from 'react'
import { favAgents, favMaps, favSprays, favWeapons } from '../data/dataFavorites'
import { arrayAgents, arrayMaps, arraySprays, arrayWeapons } from '../data/dataGlobal'
import PrintFavsAgents from '../components/PrintFavs/PrintFavsAgents'
import "./Favorites.css"
import PrintFavsMaps from '../components/PrintFavs/PrintFavsMaps'
import PrintFavsWeapons from '../components/PrintFavs/PrintFavsWeapons'
import PrintFavsSprays from '../components/PrintFavs/PrintFavsSprays'

/*
El componente encargado de pintar los favs recibe por props -> data: array de favoritos | array: res de la API con toda la data
*/
const Favorites = () => {
  console.log("favoritessss", favAgents)

  return (
    <>
    <section className="sectionFavs">
      <h2 className="h2Fav">AGENTS:</h2>
      <h4>{favAgents.length} elements</h4>
      <div className="divFavAgents">
        <PrintFavsAgents data={favAgents} array={arrayAgents}/>
      </div>
    </section>
    
    <section className="sectionFavs">
      <h2 className="h2Fav">MAPS:</h2>
      <h4>{favMaps.length} elements</h4>
      <div className="divFavMaps">
        <PrintFavsMaps data={favMaps} array={arrayMaps}/>
      </div>
    </section>
    
    <section className="sectionFavs">
      <h2 className="h2Fav">WEAPONS:</h2>
      <h4>{favWeapons.length} elements</h4>
      <div className="divFavWeapons">
        <PrintFavsWeapons data={favWeapons} array={arrayWeapons}/>
      </div>
    </section>

    <section className="sectionFavs">
      <h2 className="h2Fav">SPRAYS:</h2>
      <h4>{favSprays.length} elements</h4>
      <div className="divFavSprays">
        <PrintFavsSprays data={favSprays} array={arraySprays}/>
      </div>
    </section>
    
    </>
  )
}

export default Favorites