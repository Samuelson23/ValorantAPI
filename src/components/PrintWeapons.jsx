import React from 'react'
import PrintCardWeapons from './PrintCardWeapons/PrintCardWeapons'
import { arrayWeapons } from '../data/dataGlobal'

const PrintWeapons = () => {
  return (
    <PrintCardWeapons data={arrayWeapons}/>
  )
}

export default PrintWeapons