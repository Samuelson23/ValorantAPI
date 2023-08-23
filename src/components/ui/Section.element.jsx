import styled from '@emotion/styled';
import React from 'react'

const SectionCustom = styled.section`
    width:80vw;
    min-height: 60vh;
    border:1px solid red;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Section = ({children}) => {
  return (
    <SectionCustom>
        {children}
    </SectionCustom>
  )
}

export default Section