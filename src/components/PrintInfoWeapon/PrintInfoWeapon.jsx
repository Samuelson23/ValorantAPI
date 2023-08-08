import React from 'react'
import { useParams } from 'react-router-dom'
import { arrayWeapons } from '../../data/dataGlobal'
import "./PrintInfoWeapon.css"
const PrintInfoWeapon = () => {
  const {name} = useParams()
  const weapon = arrayWeapons.data.filter((elem)=>elem.displayName==name)
  const skins = weapon[0].skins
  console.log(weapon)
  return (
    <div className="divAllInfoWeapon">
      <h2>{weapon[0].displayName}</h2>
      <img src={weapon[0].displayIcon} alt="img weapon" />
      <div className="divInfoWeapon">
        <section className="sectionInfoWeapon">
          <h2>STATS</h2>
          <p>CATEGORY: {weapon[0].shopData.category}</p>
          <p>COST: {weapon[0].shopData.cost}$</p>
          <p>TOTAL SKINS: {weapon[0].skins.length} skins</p>
          <p>MAGAZINE SIZE: {weapon[0].weaponStats.magazineSize} ammo</p>
          <p>RELOAD TIME: {weapon[0].weaponStats.reloadTimeSeconds} sec</p>
          <p>WALL PENETRATION: {weapon[0].weaponStats.wallPenetration.includes("Low") && "LOW"}</p>
        </section>
        <section className="sectionDmgWeapon">
          <h2>DAMAGE</h2>
          {
            weapon[0].weaponStats.damageRanges.map((range, index)=>{
              return(
                <div key={weapon[0].uuid}>
                <h4>RANGE : {range.rangeStartMeters}m - {range.rangeEndMeters}m</h4>
                <p>HEAD: {range.headDamage}p.</p>
                <p>BODY: {range.bodyDamage}p.</p>
                <p>LEGS: {range.legDamage}p.</p>
                </div>
              )
            })
          }
        </section>
      </div>
      <div className="divSkinsWeapon">
          {
            skins.map((skin)=>{
              if(skin.displayIcon!=null){
                return(
                  <figure key={skin.uuid}>
                    <h4>{skin.displayName}</h4>
                    <img src={skin.displayIcon} alt="img skin" />
                  </figure>
                )
              }
            })
          }
      </div>
    </div>
  )
}

export default PrintInfoWeapon