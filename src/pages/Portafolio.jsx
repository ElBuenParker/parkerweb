import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import '../styles/portafolio.css'
import FormsImg from '../img/forms.jpg'
import ButtonsImg from '../img/btn.jpg'
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  display:flex;
  align-items: center;
  padding: 20px;
`;



const Contenido = styled.div`
  display:flex;
  align-items:center;
  align-content: space-between;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  height: 1200px;
  margin-top:10%;
  @media(min-width: 100px){
      position: relative;
      margin-top:1%;
  
      display: block;
    }

`;

const Portafolio = () => {
  return (
    <MainContainer>
    <div className="screen">
      <section className="presentacion">
        <div className="bubbleInicio">
        <div className="bubble">Entre mis proyectos podrás encontrar componentes libres de modificar para uso publico. De igual manera encontrarás proyectos como vacunacion jalisco</div>
        </div>
        <ParkerSvg className='Svg'/>
      </section>
     
      <Contenido>

        <div className="ContenidoImg">  
          <div className="descripcionImg">Formularios</div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <p>
                <img height={400} className="Img" src={FormsImg}></img>
                </p>
              </div>
              <div class="card-back">
                <p>Formularios interactivos diseñados con HTML y estilizados con CSS. Estos formularios son altamente personalizables, permitiendo ajustes en diseño, campos requeridos y acciones de envío. Su estructura modular facilita la integración en diferentes proyectos web.  </p>
                <Link to={"https://github.com/ElBuenParker/logins"}>
                <button>
                <span class="button_top" > Ir al código <ion-icon classname="gh-icon" name="logo-github"></ion-icon></span>
              </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>

        <div className="ContenidoBtn">  
          <div className="descripcionImg">Botones Personalizados</div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <p>
                <img height={400} className="Img" src={ButtonsImg}></img>
                </p>
              </div>
              <div class="card-back">
                <p>Botones interactivos con estilos personalizables creados con CSS y JavaScript, diseñados para ser fácilmente editables y adaptables a diferentes estilos y necesidades. Su código permite ajustar colores, tamaño, efectos de hover y comportamiento con facilidad, proporcionando una solución versátil para agregar interactividad a páginas web.</p>
                <Link to={"https://github.com/ElBuenParker/buttons"}>
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