import styled from '@emotion/styled';
import React from 'react'

const ImgBorderCustom = styled.img`
    z-index:-1;
    width:100%;
    height:100%;
`

const Img = () => {
  return (
    <ImgBorderCustom src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1692797208/Pngtree_twitch_webcam_or_facecam_6496488_1_ogxfxc.png" alt="border image"></ImgBorderCustom>
  )
}

export default Img