import styled from '@emotion/styled';
import React from 'react'

const DivCustom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:80px;
    padding:20px 0;
    width:100vw;
    min-height: 95vh;
`


const DivLayout = ({children}) => {
  return (
    <DivCustom>
        {children}
    </DivCustom>
  )
}

export default DivLayout