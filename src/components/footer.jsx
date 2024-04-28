import React from 'react';
import styled from 'styled-components';

const año = new Date().getFullYear();

const Footer  = () => {
    return (
        
      <FooterContainer >
        <style>@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Teko:wght@300..700&display=swap')</style>

        <FooterText>Copyright © {año} ElBuenParker-Web </FooterText>
        <FooterLink target="_blank" href="https://www.linkedin.com/in/mr-gonzalex/">
        <ion-icon name="logo-linkedin"></ion-icon> Linkedin
        </FooterLink>
        <FooterLink target="_blank" href="https://github.com/ElBuenParker">
        <ion-icon classname="gh-icon" name="logo-github"></ion-icon> GitHub
        </FooterLink>

    
    
      </FooterContainer>
    );
  };
  
  export default Footer;


const FooterContainer = styled.div`
  border-radius: 5px;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #ffffffdd;
  color: #fff;
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  align-items: center;
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  flex: 1 0 300px;
  margin: 10px;
  color: #000000;
  font-weight: 600;
  font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
`;

const FooterLink = styled.a`
  color: #000000;
  text-decoration: none;
  margin: 10px;
  font-family: "Teko", sans-serif;
  z-index: 0;

`;

