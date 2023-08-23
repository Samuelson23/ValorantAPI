import styled from '@emotion/styled';
import React from 'react'

const ButtonCustom = styled.button`
    width:240px;
    height: 80px;
    background-color: var(--redColor);
    color:var(--bkColor);
    border-radius:10px;
    border:1px solid var(--greyColor);
    font-size: 1.5rem;
    margin: 2rem;

    &:hover{
        -webkit-box-shadow: 0px 2px 20px -1px var(--whiteColor);
        -moz-box-shadow: 0px 2px 20px -1px var(--whiteColor);
        box-shadow: 0px 2px 20px -1px var(--whiteColor);
        color: var(--whiteColor);
    }

`

const Button = ({text, action}) => {
  return (
    <ButtonCustom onClick={action}>
        {text}
    </ButtonCustom>
  )
}

export default Button