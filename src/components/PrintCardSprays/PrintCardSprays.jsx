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
            {num==50 
            ? <button onClick={()=> num>50 && setNum(num-50)} disabled={true} className="btnPaginationOff">BACK</button>
            : <button onClick={()=> num>50 && setNum(num-50)} className="btnPagination">BACK</button>
            }
        
            <h4>{num-49} - {num}</h4>

            {num==500
            ? <button onClick={()=> num<data.length && setNum(num+50)} disabled={true} className="btnPaginationOff">NEXT</button> 
            : <button onClick={()=> num<data.length && setNum(num+50)} className="btnPagination">NEXT</button>            
            }
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
            {num==50 
            ? <button onClick={()=> num>50 && setNum(num-50)} disabled={true} className="btnPaginationOff">BACK</button>
            : <button onClick={()=> num>50 && setNum(num-50)} className="btnPagination">BACK</button>
            }
        
            <h4>{num-49} - {num}</h4>

            {num==500
            ? <button onClick={()=> num<data.length && setNum(num+50)} disabled={true} className="btnPaginationOff">NEXT</button> 
            : <button onClick={()=> num<data.length && setNum(num+50)} className="btnPagination">NEXT</button>            
            }
        </div>
    </div>
  )
}

export default PrintCardSprays