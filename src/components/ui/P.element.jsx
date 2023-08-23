import styled from '@emotion/styled';
import React from 'react'

const Pcustom = styled.p`
    font-size: ${({fontSize})=>
        fontSize==="big"
        ? "2rem"
        : fontSize==="medium"
        ? "1rem"
        : fontSize==="small" && "12px"
    };
    background-color: ${({bkColor})=> bkColor ? bkColor : "var(--blackColor)"};
    color: ${({color})=> color ? color : "var(--whiteColor)"};
    width: ${({width})=>width ? width : "90%"};
    text-align: center;
    padding:${({padding})=> padding ? padding : 0};

    @media screen and (width<700px){
        width:90vw;
        font-size: ${({fontSize})=>
        fontSize==="big"
        ? "1.5rem"
        : fontSize==="medium"
        ? "12px"
        : fontSize==="small" && "12px"
    };
    }
`


const P = ({text, color, bkColor, fontSize, width, padding}) => {
  return (
    <Pcustom color={color} bkColor={bkColor} fontSize={fontSize} width={width} padding={padding}>
        {text}
    </Pcustom>
  )
}

export default P