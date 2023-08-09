import React from 'react'
import { favAgents } from '../../data/dataFavorites'

/*
Creamos un componente que recibe por prop el nombre de la clase, asi podemos reutilizar el codigo en las diferentes rutas de la pagina
ya que vamos a utilizar el mismo boton un minimo de 5 veces y así no repetimos codigo.
*/

const BtnFav = ({className, elem}) => {
    
    const addToFavorite = (agent) => {
        console.log("elem button", agent)
        const btn = document.getElementById(`${agent.uuid}`)
        btn.classList.toggle("btnInFav")
        console.log(btn)
        if(!favAgents.includes(agent.uuid)){
            favAgents.push(agent.uuid)
            
        }else{
            for(let x=0;x<favAgents.length;x++){
                if(favAgents[x]==agent.uuid){
                    favAgents.splice(x,1)
                    btn.removeAttribute("class")
                    btn.setAttribute("class","btnAddFav")
                }
            }
        }
        console.log("favsss", favAgents)
    }
  return (
    <button className={className} id={elem.uuid} onClick={()=>addToFavorite(elem)}>
        <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691485264/star_FILL0_wght400_GRAD0_opsz48_vtyy16.svg" 
        alt="logoFavorite" 
                            
        />
    </button>
  )
}

export default BtnFav