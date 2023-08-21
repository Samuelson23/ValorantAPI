import React from 'react'
import { arraySprays } from '../data/dataGlobal'
import PrintCardSprays from './PrintCardSprays/PrintCardSprays'

const PrintSprays = () => {

  return (
    <PrintCardSprays data={arraySprays.data}/>
  )
}

export default PrintSprays