import React, { useEffect } from 'react'
import { arraySprays } from '../data/dataGlobal'
import PrintCardSprays from './PrintCardSprays/PrintCardSprays'

const PrintSprays = () => {
  useEffect(()=>{
    window.scroll({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[])
  
  return (
    <PrintCardSprays data={arraySprays.data}/>
  )
}

export default PrintSprays