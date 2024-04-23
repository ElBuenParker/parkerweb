import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import { Link } from 'react-router-dom';
import '../styles/cmd.css'
import '../styles/slider.css'



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
          <div className="bubble">Hola, mi nombre es Alexis, soy desarrollador Front-End e Ingeniero en Computación.</div>
          </div>
          <div className="parker">

            <ParkerSvg className='Svg'/>
            <div className="skillsIcon">
            <div class="figma">
              <ion-icon name="logo-figma"></ion-icon>
              </div>
              <div class="react">
              <ion-icon name="logo-react"></ion-icon>
              </div>
              <div class="html5">
              <ion-icon name="logo-html5"></ion-icon>
              </div>
              
              <div class="js">
              <ion-icon name="logo-javascript"></ion-icon>
              </div>
              <div class="css3">
              <ion-icon name="logo-css3"></ion-icon>
            </div>

            </div>
          </div>
          <div className="presentacion">
          <h2 className="nombre">ElBuen<span className="color">Parker</span></h2>
          <h3 className="frontend">.<ion-icon name="chevron-back"></ion-icon> Front-End developer  <span className="color2"> /<ion-icon name="chevron-forward"></ion-icon></span></h3>
          </div>
        </section>
      
        <div className="mySkills">
        <div class="skills">
          <div class="terminal_toolbar">
            <div class="butt">
              <button class="btn btn-color"></button>
              <button class="btn"></button>
              <button class="btn"></button>
            </div>
            <p class="user">ElBuenParker@admin: ~</p>
            <div class="add_tab">+</div>
          </div>
          <div class="terminal_body">
            <div class="terminal_prompt">
              <span class="terminal_user">$ npm install skills</span>
              <span class="terminal_location">~</span>
              <span class="terminal_bling">$</span>
              <span class="terminal_cursor"></span>

            </div>
            <div class="terminal_output">
              <pre class="output_text">Welcome to my Terminal</pre>
            </div>
            <div class="terminal_input">
              <input placeholder="Type a command..." class="input_text" type="text" />
            </div>
          </div>
        </div>

        <div class="slider">
          <div class="slide-track">
              <div class="npm">
              <ion-icon name="logo-npm"> NPM</ion-icon>
              </div>
              <div class="git">
              <ion-icon name="logo-github"></ion-icon>
              </div>
             
              
          </div>
       </div>

        </div>
        


      </div>
      

    </MainContainer>
  );
};

export default Home;
