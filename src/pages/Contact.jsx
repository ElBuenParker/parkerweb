import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import { Link } from 'react-router-dom';
import '../styles/contact.css'





const MainContainer = styled.div`
  display:flex;
  align-items: center;
  padding: 20px;
 
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3f51b5;
`;


const Contact = () => {
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
          <div className="cvPdf">
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <object
                data={require('../utils/CV.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../utils/CV.pdf')} id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
            </div>


          </div>
         
        </section>
      </div>
      

    </MainContainer>
  );
};

export default Contact;