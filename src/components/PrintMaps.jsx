import React, { useEffect } from 'react'
import PrintCardMaps from './PrintCardMaps/PrintCardMaps'
import { arrayMaps } from '../data/dataGlobal'

const PrintMaps = () => {

  useEffect(()=>{
    window.scroll({
      top:0,
      left:0,
      behavior:"instant",
    })
  },[])

  return (
    <PrintCardMaps data={arrayMaps.data}/>
  )
}

export default PrintMaps