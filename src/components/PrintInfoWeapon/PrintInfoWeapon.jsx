import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { arrayWeapons } from '../../data/dataGlobal'
import "./PrintInfoWeapon.css"
import BtnFav from '../BtnFav/BtnFav'


const PrintInfoWeapon = () => {
  const {name} = useParams()
  const [showSkins, setShowSkins] = useState(false)
  const navigate = useNavigate()
  const weapon = arrayWeapons.data.filter((elem)=>elem.displayName==name)
  const skins = weapon[0].skins
  useEffect(()=>{
    window.scroll({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[])
  
  return (
    <>
    <div className="divBackArrow">
        <img 
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1692727727/pngwing.com_3_as5jo8.png" 
        alt="image back arro" 
        className="imgBackArrow" 
        onClick={()=> navigate("/weapons")}
        />
    </div>
    <div className="divAllInfoWeapon">
      <h2>{weapon[0].displayName}</h2>
      <img src={weapon[0].displayIcon} alt="img weapon" className="imgMainWeapon"/>
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
      <button className="btnSkinsWeapons" onClick={()=>setShowSkins(!showSkins)}><h3>SHOW SKINS</h3></button>
      {showSkins && (
        <div className="divSkinsWeapon">
        {
          skins.map((skin)=>{
            if(skin.displayIcon!=null){
              return(
                <figure key={skin.uuid}>
                  <h4>{skin.displayName}</h4>
                  <img src={skin.displayIcon} alt="img skin" className="imgSkinWeapon" />
                  <BtnFav className="btnAddFav" elem={skin} idArray={"weapon"}/>
                </figure>
              )
            }
          })
        }
    </div>
      )}
    </div>
    </>
  )
}

export default PrintInfoWeapon