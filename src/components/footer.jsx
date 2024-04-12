import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        
      <FooterContainer>
        <style>@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Teko:wght@300..700&display=swap')</style>

        <FooterText>Copyright © 2024 My Website</FooterText>
        <FooterLink href="https://www.linkedin.com/in/mr-gonzalex/">
        <ion-icon name="logo-linkedin"></ion-icon> Linkedin
        </FooterLink>
        <FooterLink href="https://github.com/ElBuenParker">
        <ion-icon classname="gh-icon" name="logo-github"></ion-icon> GitHub
        </FooterLink>

    
    
      </FooterContainer>
    );
  };
  
  export default Footer;


const FooterContainer = styled.div`
  background-color: #dddd;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

`;

