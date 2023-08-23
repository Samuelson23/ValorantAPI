import styled from '@emotion/styled';
import React from 'react'

const H2Custom = styled.h2`
    height: auto;
    font-size: 6rem;
    color:var(--redColor);
    letter-spacing:5px;
    font-style: italic;
    padding:0 0 1.5rem 0;
    display:flex;
    justify-content:center;
    align-items: center;
    @media screen and (width<700px){
        font-size: 3rem;
    }
`

const H2 = ({text}) => {
  return (
    <H2Custom>
        {text}
    </H2Custom>
  )
}

export default H2