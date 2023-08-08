import React from 'react'
import "./PrintCardWeapons.css"
import { useNavigate } from 'react-router-dom'

const PrintCardWeapons = ({data}) => {
/*
Filtramos las armas por categorias para imprimirlas en diferentes divs y asi tenerlas ordenadas
*/
    const weapons = data.data
    const riffles = weapons.filter((elem)=> elem.shopData!=null && elem.shopData.category.includes("Rifles"))
    const smgs = weapons.filter((elem)=> elem.shopData!=null && elem.shopData.category.includes("SMG"))
    const shotguns = weapons.filter((elem)=> elem.shopData!=null && elem.shopData.category.includes("Shotgun"))
    const heavyWeapons = weapons.filter((elem)=> elem.shopData!=null && elem.shopData.category.includes("Heavy"))
    const pistols = weapons.filter((elem)=> elem.shopData!=null && elem.shopData.category.includes("Pistol"))
    const melee = weapons.filter((elem)=>elem.shopData==null)
    const navigate = useNavigate()

    console.log(data)
  return (
    <div className="divCardsWeapons">
        <div className="divPistols">
        {
            pistols.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img 
                            src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        {
            melee.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        </div>

        <div className="divSmgsShotHeavy">
        {
            smgs.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        {
            shotguns.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        {
            heavyWeapons.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        </div>
        
        <div className="divRifles">
        {
            riffles.map((elem)=>{
                return(
                    <section key={elem.uuid}>
                        <figure className="figureCardWeapon" onClick={()=> navigate(`/weapons/${elem.displayName}`)}>
                            <h2>{elem.displayName}</h2>
                            <img src={elem.displayIcon} alt="weapon imagen" />
                            
                        </figure>
                        <button onClick={()=> navigate(`/weapons/${elem.displayName}`)}>MORE INFO</button>
                    </section>
                )
            })
        }
        </div>
    </div>
  )
}

export default PrintCardWeapons