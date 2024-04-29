import React from "react";
import styled from "styled-components";
import ParkerSvg from "../components/ParkerSvg";
import '../styles/bubble.css'
import { Link } from 'react-router-dom';
import '../styles/contact.css'
import Linkedin from '../img/linkedin.jpeg'
import GitHub from '../img/gh.jpeg'
import pdf from '../utils/CV.pdf'


const MainContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
 
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3f51b5;
`;


const Contact = () => {
  return (
    <MainContainer>
            
      <div className="screenMain">
      <div className="screen">
        <section className="presentacion">
          <div className="bubbleInicio">
          <div className="bubble">Puedes descargar mi Cv o bien visitar cualquiera de mis redes para conocer más de mi.</div>

          </div>
          <div className="parker">
           
            <ParkerSvg className='Svg'/>
            <div className="containerCv">
              <div className="contactText">
                <div className="CvText">
                <button class="download-button">
                
                <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Descarga mi Cv</div>
                <div class="download">
                <a className="enlace"   href={pdf} target="_blank" rel="noopener noreferrer" download="Cv_Manuel_Gonzalez.pdf"> 
                <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                </a>
                </div>
              </button></div>
              </div>

              </div>
          </div>
          <div class="loading">
                <div class="loading-box">
                  <div class="WH color l1"></div>
                  <div class="ball color"></div>
                  <div class="WH color l2"></div>
                </div>
              </div>

        </section>
        <div className="separadorMain">
        <div className="separador"></div>
        <div className="separado2r"></div>
        <div className="separador3"></div>
        <div className="separador4"></div>
        </div>
            <div className="myContact">
              <div className="containerLinkedin">
                <Link target="_blank" className="Linkedin" to={"https://www.linkedin.com/in/mr-gonzalex/"}>             
                  <div ><ion-icon  name="logo-linkedin"></ion-icon></div>
                </Link>

                <div className="contactText">
                <img className="Img" src={Linkedin}></img>
                </div>

              </div>
              <div  className="containerGithub">
                <Link target="_blank" className="github" to={"https://github.com/ElBuenParker/"}>             
                  <div ><ion-icon name="logo-github"></ion-icon></div>
                </Link>
                <div className="contactText">
                <img className="Img" src={GitHub}></img>
                </div>

              </div>
          
            </div>
        
      </div>
      
      </div>

     

    </MainContainer>
  );
};

export default Contact;