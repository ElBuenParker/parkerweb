import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import '../styles/portafolio.css'
import FormsImg from '../img/forms.jpg'
import ButtonsImg from '../img/btn.jpg'
import PortafolioImg from '../img/portafolio.jpg'
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  display:flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;


const Contenido = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:10vh;
  @media(max-width: 1080px){
      position: relative;
      margin-top:5vh;
      }

`;

const Portafolio = () => {
  return (
    <MainContainer>
    <div className="screen">
      <section className="presentacion">
      <div className="bubbleInicio">
          <div className="bubble">A continuación podrás encontrar mi portafolio con algunos de mis proyectos realizados.</div>

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
      </section>
     
      <Contenido>

        <div className="ContenidoImg">  
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <p>
                <img className="Img" src={FormsImg}></img>
                </p>
              </div>
              <div class="card-back">
                <p>Formularios hechos con css paa uso publico y editables. </p>
                <Link to={"https://github.com/ElBuenParker/logins"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
                <Link to={"https://elbuenparker.github.io/logins/"}>
                <button>
                <span class="button_top" > Demo <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="ContenidoImg">  
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <p>
                <img className="Img" src={ButtonsImg}></img>
                </p>
              </div>
              <div class="card-back">
                <p>Botones con estilos CSS de facil personalización.</p>
                <Link to={"https://github.com/ElBuenParker/buttons"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
                <Link to={"https://elbuenparker.github.io/buttons/"}>
                <button>
                <span class="button_top" > Demo <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
        <div className="ContenidoImg">  
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <p>
                <img className="Img" src={PortafolioImg}></img>
                </p>
              </div>
              <div class="card-back">
                <p>Repositorio de mi portafolio realizado en react.</p>
                <Link to={"https://github.com/ElBuenParker/parkerweb"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>

       
      </Contenido>
    </div>
    

  </MainContainer>
  );
};

export default Portafolio;