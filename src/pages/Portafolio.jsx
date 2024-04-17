import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import '../styles/portafolio.css'
import FormsImg from '../img/forms.jpg'
import ButtonsImg from '../img/btn.jpg'

const MainContainer = styled.div`
  display:flex;
  align-items: center;
  padding: 20px;
 
`;

const Contenido = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  display: flex;
  height: 800px;
  background-color:#ffff; //borrar al final
  margin-top:10%;
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
          <div className="descripcionImg">Formularios en diferentes presentaciones para uso publico, personalizables y de uso sencillo.</div>
          <img height={400} className="Img" src={FormsImg}></img>
        </div>

        <div className="ContenidoBtn">  
          <div className="descripcionImg">Botones con diferenetes estilos, personalisables y adaptables de manera sencilla.</div>
          <img height={400} className="Img" src={ButtonsImg}></img>
        </div>

       
      </Contenido>
    </div>
    

  </MainContainer>
  );
};

export default Portafolio;