import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'



const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3f51b5;
`;

const ImageContainer = styled.div`
  width: 50%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Contact = () => {
  return (
    <MainContainer>
      <Title>Contacto</Title>
      <ParkerSvg className='Svg'/>

      <ImageContainer>
        <Image src="https://example.com/image.jpg" alt="Imagen de ejemplo" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Contact;