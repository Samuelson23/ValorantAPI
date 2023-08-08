import React from 'react'
import PrintCardMaps from './PrintCardMaps/PrintCardMaps'
import { arrayMaps } from '../data/dataGlobal'

const PrintMaps = () => {
  return (
    <PrintCardMaps data={arrayMaps.data}/>
  )
}

export default PrintMaps