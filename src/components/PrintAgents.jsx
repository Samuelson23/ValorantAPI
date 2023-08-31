import React, { useEffect, useState } from 'react'
import { getService } from '../service/service.config'
import { arrayAgents, arrayMaps, arraySprays, arrayWeapons } from '../data/dataGlobal'
import PrintCardAgent from './PrintCardAgent/PrintCardAgent'

const PrintAgents = () => {
  useEffect(()=>{
    window.scroll({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[])
  return (
    <>
    <PrintCardAgent data={arrayAgents.data}></PrintCardAgent>
    </>
  )
}

export default PrintAgents