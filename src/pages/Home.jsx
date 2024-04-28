import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import '../styles/cmd.css'
import Perfil from '../utils/perfil2.jpg'



const MainContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  h2{
    color: black;
    background-color: transparent;
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
      <div className="screenMain">

      <div className="screen">
        <section className="presentacion">
          <div className="bubbleInicio">
          <div className="bubble">Hola, soy Alexis, ingeniero en computación. Me apasiona el universo de la programación, el diseño y desarrollo web y la tecnología en general. mi pasión es el front-end, y crear cosas divertidas.</div>
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

          <div className="whoIs" z-index={-1}>Quien es Manuel Alexis? </div>

        </section>


        <div className="quienSoy">
          
           
        <div class="skills">
          <div class="terminal_toolbar">
            <div class="butt">
              <button class="btn btn-color"></button>
              <button class="btn2"></button>
              <button class="btn3"></button>
            </div>
            <p class="user">ElBuenParker@admin: ~</p>
            <div class="add_tab">+</div>
          </div>
          <div class="terminal_body">
            <div class="terminal_prompt">
              <span class="terminal_user">&lt; Manuel Alexis Gonzalez Romero</span>
              <p className="desarrollador">&lt;  Desarrollador Javascript y FronEnd </p>
              <p className="ing">&lt; Ingeniero en computacion</p>
              <p className="define"><span>&lt;Que_</span> me define?</p>
              <p className="soy">&lt;  Soy alguien que realmente disfruta
              desarrollar interfaces web, creativo, con un compromiso
              continuo por el aprendizaje y mejora constante de sus habilidades.</p>
              <p className="define"><span>&lt;Cuales son mis Skills?</span></p>
              <p className="soy">&lt; Uso herramientas como Javascript <div class="jsIcon"><ion-icon name="logo-javascript"></ion-icon></div> , Html<div class="html5Icon">
              <ion-icon name="logo-html5"></ion-icon>
              </div>, Css <div class="css3Icon">
              <ion-icon name="logo-css3"></ion-icon>
            </div>, react <div class="react">
              <ion-icon name="logo-react"></ion-icon>
              </div>y entornos de diseño como Figma <div class="figmaIcon">
              <ion-icon name="logo-figma"></ion-icon>
              </div>.
              <span class="terminal_cursor"></span>

</p>

            </div>
  
          </div>
        </div>

          <div class="cardP">
            <img src={Perfil} className="perfil" />
            <p class="cardP-title">ElBuenParker <p className="parrafo"></p>
                <span>Front-End dev </span>
            </p>
          </div>
        </div>
      </div>
      
      </div>
     

    </MainContainer>
  );
};

export default Home;