import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import { Link } from 'react-router-dom';


const MainContainer = styled.div`
  display:flex;
  align-items: center;
  padding: 20px;

  h2{
    color: black;
    font-size:15vh;
    font-weight: 400;
    font-family: "Teko", sans-serif;
    font-optical-sizing: auto;
    z-index: 5;
    text-shadow: 4px 4px 1px #ffffff;
      span{
        font-weight: bold;
        font-family: "Teko", sans-serif;
        font-optical-sizing: auto;
          }
          span:hover{
      color: #e5173d;

    }
          @media(max-width: 1080px){
        font-size: 10vh;
    
    }
    }
    h3{
      display: flex;
      color: #2ea8c1;
      font-size:4vh;
      font-family: "Kode Mono", monospace;
      font-optical-sizing: auto;
      z-index: 5;
      justify-content: center;
      margin-top:-50vh;
      margin-left:60vh;
        span{
          color: #e4e4e4;
          font-weight: bold;
          font-family: "Kode Mono", monospace;
          font-optical-sizing: auto;
          animation-name: parpadeo;
          animation-iteration-count: infinite;
          animation-duration:1s;
            }
            @keyframes parpadeo {
                0% {opacity:0}
                49%{opacity: 0}  
                50%{opacity: 100} 
                99%{opacity: 100}  
                100%{opacity: 0}   
            }
            span:hover{
        color: #ffffff;

      }
        @media(max-width: 1080px){
          margin-top:-15vh;
        margin-left:0vh;
          font-size: 2vh;
      }
    }
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
          <div className="parker">
            <div className="medios">
            <Link className="github" to={"https://github.com/ElBuenParker/"}>             
            <div ><ion-icon name="logo-github"></ion-icon></div>
            </Link>
            <Link className="Linkedin" to={"https://www.linkedin.com/in/mr-gonzalex/"}>             
            <div ><ion-icon  name="logo-linkedin"></ion-icon></div>
            </Link>
            <Link className="google" to={"/contact"}>             
            <div ><ion-icon name="mail"></ion-icon></div>
            </Link>
            </div>
            <ParkerSvg className='Svg'/>
          </div>
          <div className="presentacion">
          <h2 className="nombre">ElBuen<span className="color">Parker</span></h2>
          <h3 className="frontend">.<ion-icon name="chevron-back"></ion-icon> Front-End developer in Mexico <span className="color2"> /<ion-icon name="chevron-forward"></ion-icon></span></h3>
          </div>

          

        </section>


      </div>
      

    </MainContainer>
  );
};

export default Home;
