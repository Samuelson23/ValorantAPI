import React, { useEffect, useState } from 'react'
import { getService } from '../service/service.config'
import { arrayAgents, arrayMaps, arraySprays, arrayWeapons } from '../data/dataGlobal'
import PrintCardAgent from './PrintCardAgent/PrintCardAgent'

const PrintAgents = () => {

  return (
    <>
    <PrintCardAgent data={arrayAgents.data}></PrintCardAgent>
    </>
  )
}

export default PrintAgents