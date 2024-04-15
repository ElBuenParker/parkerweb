import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";


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

const Home = () => {
  return (
    <MainContainer>
      <Title>My home</Title>

    </MainContainer>
  );
};

export default Home;
