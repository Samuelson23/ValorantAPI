import React, { useEffect, useState } from 'react'
import "./PrintCardSprays.css"
import PrintSprays from '../PrintSprays/PrintSprays'


const filtrarCincuenta = (data, num) => {
    const arraySpraysFiltrados = []

    for(let i=(num-50);i<num;i++){
        arraySpraysFiltrados.push(data[i])
    }
    return arraySpraysFiltrados
}

const setearMaxBtn = (data,number) => {
    if(num<data.length){
        setNum(number)
    }
}

const PrintCardSprays = ({data}) => {
    const [num, setNum] = useState(0)
    const totalSprays = filtrarCincuenta(data,num)
    const length = data.length

    useEffect(()=>{
        setNum(50)
    },[])
    useEffect(()=>{
        console.log("number", num)
        //printButton(data,num)
    },[num])

  return (
    <div className="divAllSprays">
        <div className="divButtonsSprays">
        <button onClick={()=> num>50 && setNum(num-50)} className="btnPagination">NUM-</button>
        <h4>{num-49} - {num}</h4>
        <button onClick={()=> num<data.length && setNum(num+50)} className="btnPagination">NUM+</button>
        </div>
        <div className="divPrintSprays">
            {/* {
                data.map((elem,index,lastIndex)=>{
                    lastIndex=num
                    
                    return(
                        lastIndex<index<num && (
                            <figure key={elem.uuid} className="figureSpray">
                                <h2>{elem.displayName}</h2>
                                <img src={elem.fullIcon} alt={elem.displayName} className="imgSpray"/>
                            </figure>
                        )
                    )
                })
            } */}
            <PrintSprays data={totalSprays}/>
        </div>
        <div className="divButtonsSprays">
        <button onClick={()=> num>50 && setNum(num-50)} className="btnPagination">NUM-</button>
        <h4>{num-49} - {num}</h4>
        <button onClick={()=> num<data.length && setNum(num+50)} className="btnPagination">NUM+</button>
        </div>
    </div>
  )
}

export default PrintCardSprays