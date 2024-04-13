import React from "react";
import styled from "styled-components";

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

const Home = () => {
  return (
    <MainContainer>
      <Title>about me</Title>
      <ImageContainer>
        <Image src="https://example.com/image.jpg" alt="Imagen de ejemplo" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Home;