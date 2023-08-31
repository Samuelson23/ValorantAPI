import React, { useEffect } from 'react'
import PrintCardWeapons from './PrintCardWeapons/PrintCardWeapons'
import { arrayWeapons } from '../data/dataGlobal'

const PrintWeapons = () => {
  useEffect(()=>{
    window.scroll({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[])
  
  return (
    <PrintCardWeapons data={arrayWeapons}/>
  )
}

export default PrintWeapons