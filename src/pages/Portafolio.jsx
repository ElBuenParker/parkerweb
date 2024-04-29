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
  justify-content: center;
`;


const Contenido = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width: 1080px){
      position: relative;
      }

`;

const Portafolio = () => {
  return (
    <MainContainer>
    <div className="screenMain">
      
    <div className="screen">
      <section className="presentacion">
      <div className="bubbleInicio">
          <div className="bubble">A continuación podrás encontrar mi portafolio con algunos de mis proyectos realizados.</div>
          </div>
          <div className="parker">
            <ParkerSvg className='Svg'/>
            <div class="lamp">
              <div class="glass">
                <div class="lava">
                  <div class="blob"></div>
                  <div class="blob"></div>
                  <div class="blob"></div>
                  <div class="blob top"></div>
                  <div class="blob bottom"></div>
                </div>
              </div>
  
            </div>
  
          </div>
          <div className="myPortafolio">
            <h2 className="portafolioText">Mi<span className="portafolioText2">Portafolio</span></h2>
            </div>
            
      </section>
      <div className="separadorMain">
        <div className="separador"></div>
        <div className="separado2r"></div>
        <div className="separador3"></div>
        <div className="separador4"></div>
        </div>
     
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
                <Link target="_blank" to={"https://github.com/ElBuenParker/logins"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
                <Link target="_blank" to={"https://elbuenparker.github.io/logins/"}>
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
                <Link target="_blank" to={"https://github.com/ElBuenParker/buttons"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
                <Link target="_blank" to={"https://elbuenparker.github.io/buttons/"}>
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
                <Link target="_blank" to={"https://github.com/ElBuenParker/parkerweb"}>
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
    

    </div>


  </MainContainer>
  );
};

export default Portafolio;