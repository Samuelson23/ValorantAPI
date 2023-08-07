import React from 'react'

const PrintCardAgent = ({data}) => {

  return (
    <div>
        {
        data?.map((elem)=>{
            return (
                <section key={elem.uuid}>
                    <figure>
                        <h2>{elem.displayName}</h2>
                    </figure>
                </section>
            )
        })
        }
    </div>
  )
}

export default PrintCardAgent