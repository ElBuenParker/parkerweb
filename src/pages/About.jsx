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
  width: 100px;
  height: 100px;
`;

const Home = () => {
  return (
    <MainContainer>
      <Title>about me</Title>
      
      <ParkerSvg className='Svg'/>

    
    </MainContainer>
  );
};

export default Home;