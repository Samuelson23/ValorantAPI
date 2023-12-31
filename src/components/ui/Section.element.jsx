import styled from '@emotion/styled';
import React from 'react'

const SectionCustom = styled.section`
    width:80vw;
    min-height: 60vh;
    border:9px ridge var(--redColor);
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding:15px 0;
    &.animatedSectionOff{
    opacity: 0.2;
    transition: all 1s;
}
`

const Section = ({children, className}) => {
  return (
    <SectionCustom className={className}>
        {children}
    </SectionCustom>
  )
}

export default Section