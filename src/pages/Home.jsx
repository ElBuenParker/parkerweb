import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'


const MainContainer = styled.div`
  display:flex;
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
      <div className="screen">
        <section className="presentacion">
          <div className="bubbleInicio">
          <div className="bubble">Hola, mi nombre es Alexis, soy desarrollador Front-End e Ingenieron en Computación.</div>

          </div>
          <ParkerSvg className='Svg'/>
        </section>
      </div>
      

    </MainContainer>
  );
};

export default Home;
