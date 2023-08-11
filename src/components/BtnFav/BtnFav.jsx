import React from 'react'
import { favAgents } from '../../data/dataFavorites'
import { switchFavs } from '../../utils/switchFavs'

/*
Creamos un componente que recibe por prop el nombre de la clase, asi podemos reutilizar el codigo en las diferentes rutas de la pagina
ya que vamos a utilizar el mismo boton un minimo de 5 veces y así no repetimos codigo. Ademas recibe el objeto completo (elem) y
un identificador para saber si es un agente, un mapa, un arma o un spray para asi guardar los datos en diferentes arrays
*/

const BtnFav = ({className, elem, idArray}) => {
    
    const addToFavorite = (elem) => {
        
        switchFavs(elem, idArray)   //Este switch es el encargado de guardar el elemento que recibe el boton en los diferentes arrays(agentes,mapas,weapons o skins)
    }

  return (
    <button className={className} id={elem.uuid} onClick={()=>addToFavorite(elem)}>
        <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691485264/star_FILL0_wght400_GRAD0_opsz48_vtyy16.svg" 
        alt="logoFavorite" 
        className="imgBtnFav"                    
        />
    </button>
  )
}

export default BtnFav